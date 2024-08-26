import { NextResponse } from "next/server";

const users = [
  {
    id: 1,
    name: "Thế Cường",
    age: 20,
  },
  {
    id: 2,
    name: "Nguyễn Kim",
    age: 20,
  },
];

export async function GET(req: any) {
  const { searchParams } = new URL(req.url);
  const nameQuery = searchParams.get("name")?.toLowerCase();
  if (!nameQuery) {
    return NextResponse.json({ users });
  }
  const matchingUsers = users.filter((user) =>
    user.name.toLowerCase().includes(nameQuery)
  );
  if (matchingUsers.length === 0) {
    return NextResponse.json({
      message: `Không tìm thấy người dùng nào với tên: ${nameQuery}`,
    });
  }
  return NextResponse.json({ users: matchingUsers });
}

export async function POST(req: any) {
  const data = await req.json();

  return NextResponse.json({
    messenge: "thêm mới thông tin người dùng thành công",
    user: data,
  });
}