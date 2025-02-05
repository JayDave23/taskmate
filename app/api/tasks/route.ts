import { NextResponse } from "next/server";
import { db } from "@/db";
import { tasks } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  const { title, description, dueDate, userId,status } = await req.json();

  try {
    const task = await db.insert(tasks).values({
      id: crypto.randomUUID(),
      status,
      title,
      description,
      dueDate,
      userId,
    }).returning();

    return NextResponse.json(task[0], { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create task" }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {

    const tasksList = await db.select().from(tasks);
    return NextResponse.json(tasksList, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch tasks" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  const { id, title, description, dueDate, status } = await request.json();

  try {
    const updatedTask = await db.update(tasks)
      .set({ title, description, dueDate, status })
      .where(eq(tasks.id, id))
      .returning();

    return NextResponse.json(updatedTask[0], { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to update task" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const { id } = await request.json();

  try {
    await db.delete(tasks).where(eq(tasks.id, id));
    return NextResponse.json({ message: "Task deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to delete task" }, { status: 500 });
  }
}
