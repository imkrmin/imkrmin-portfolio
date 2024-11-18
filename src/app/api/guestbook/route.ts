import connectDB from "@/lib/database/db";
import { Counter } from "@/schema/counter";
import { Guestbook } from "@/schema/guestbookSchema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const guestbooks = await Guestbook.find(
      {},
      "id totalPosts nickname message createdAt"
    ).sort({ createdAt: -1 });

    return NextResponse.json({ guestbooks: guestbooks }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: "데이터 가져오기 실패" },
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

    const updateTotalPosts = counter.guestbookIdCounter + 1;

    await Counter.updateOne(
      { id: 0 },
      { guestbookIdCounter: updateTotalPosts }
    );

    const newGuestbook = {
      id: id,
      totalPosts: updateTotalPosts,
      nickname: nickname,
      password: password,
      message: message,
    };

    // 방명록 생성
    await Guestbook.create(newGuestbook);

    return NextResponse.json(
      { message: "방명록을 성공적으로 작성했습니다." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error creating guestbook entry:", error);
    return NextResponse.json(
      { error: "방명록을 작성하는데 실패하였습니다." },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request): Promise<NextResponse> {
  const { id } = await req.json();
  try {
    await connectDB();

    const response = await Guestbook.findByIdAndDelete(id);

    if (!response) {
      return NextResponse.json(
        { message: "사용자를 찾을 수 없습니다." },
        { status: 404 }
      );
    }

    return NextResponse.json("방명록을 성공적으로 삭제하였습니다.");
  } catch (error: any) {
    throw new Error(error);
  }
}
