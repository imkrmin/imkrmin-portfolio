"use server";

import { revalidatePath } from "next/cache";

export const fetchGuestbooks = async (page: number, pageSize: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/guestbook?page=${page}&pageSize=${pageSize}`
    );

    if (!response.ok) {
      throw new Error("방명록을 가져오는 데 실패했습니다.");
    }

    return response.json();
  } catch (error) {
    console.error("방명록을 가져오는 데 실패 :", error);
  }
};

export const createGuestbook = async (data: {
  id: string;
  nickname: string;
  password: string;
  message: string;
}) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/guestbook`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("방명록 작성에 실패했습니다.");
    }

    revalidatePath("/");
    return await response.json();
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("방명록 작성 오류:", error.message);
      alert(error.message);
    } else {
      console.error("알 수 없는 오류 발생", error);
      alert("알 수 없는 오류가 발생했습니다.");
    }
  }
};

export const deleteGuestbook = async (id: string, password: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/guestbook`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, password }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    revalidatePath("/");
    return "방명록이 성공적으로 삭제되었습니다.";
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("방명록 삭제 실패:", error);
      throw new Error(error.message || "방명록 삭제를 실패했습니다.");
    } else {
      console.error("알 수 없는 오류 발생", error);
      alert("알 수 없는 오류가 발생했습니다.");
    }
  }
};
