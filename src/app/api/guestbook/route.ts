import connectDB from "@/lib/database/db";
import { NextResponse } from "next/server";
import { Counter } from "@/schema/counter";
import { Guestbook } from "@/schema/guestbookSchema";
const bcrypt = require("bcrypt");

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = parseInt(searchParams.get("pageSize") || "4", 10);

  try {
    await connectDB();

    const guestbooks = await Guestbook.find(
      {},
      "id totalPosts nickname message createdAt"
    )
      .sort({ createdAt: -1 })
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    const totalGuestbooks = await Guestbook.countDocuments();
    const totalPages = Math.ceil(totalGuestbooks / pageSize);

    return NextResponse.json(
      {
        guestbooks,
        totalPages,
        currentPage: page,
        totalGuestbooks,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: "방명록 가져오기 실패" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const { id, nickname, password, message } = await req.json();

    let counter = await Counter.findOne({ id: 0 });

    if (!counter) {
      counter = new Counter({
        id: 0,
        guestbookIdCounter: 0,
      });
      await counter.save();
    }

    const newPostId = counter.guestbookIdCounter + 1;

    await Counter.updateOne({ id: 0 }, { guestbookIdCounter: newPostId });

    const newGuestbook = {
      id: id,
      totalPosts: newPostId,
      nickname: nickname,
      password: password,
      message: message,
    };

    await Guestbook.create(newGuestbook);

    return NextResponse.json(
      { message: "방명록을 성공적으로 작성했습니다." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error creating guestbook entry:", error);
    return NextResponse.json(
      { message: "방명록을 작성하는데 실패하였습니다." },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request): Promise<NextResponse> {
  const { id, password } = await req.json();
  try {
    await connectDB();

    const guestbook = await Guestbook.findById(id);

    if (!guestbook) {
      return NextResponse.json(
        { message: "방명록을 찾을 수 없습니다." },
        { status: 404 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, guestbook.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "비밀번호가 일치하지 않습니다." },
        { status: 403 }
      );
    }

    const deletedCounter = guestbook.totalPosts;

    await Guestbook.findByIdAndDelete(id);

    await Guestbook.updateMany(
      { totalPosts: { $gt: deletedCounter } },
      { $inc: { totalPosts: -1 } }
    );

    const remainingPosts = await Guestbook.countDocuments();
    await Counter.updateOne({ id: 0 }, { guestbookIdCounter: remainingPosts });

    return NextResponse.json(
      { message: "방명록이 성공적으로 삭제되었습니다." },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE Error:", error);
    return NextResponse.json(
      { message: "서버 에러가 발생했습니다. 잠시 후 다시 시도해주세요." },
      { status: 500 }
    );
  }
}
