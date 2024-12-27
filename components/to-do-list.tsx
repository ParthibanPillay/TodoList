"use client"

import { Todo } from "@/lib/types";
import { title } from "process";
import { useState } from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { PlusCircle } from "lucide-react";
import { TodoItem } from "./to-do-item";
import { toast, useToast } from "@/hooks/use-toast";

export function TodoList() {
    const [todos, settodos] = useState<Todo[]>([]);
    const [newTodo, setnewTodo] = useState("");
    const { toast } = useToast();

    const addTodo = (e: React.FormEvent) => {
        e.preventDefault();
        if(!newTodo.trim()) return;

        const todo: Todo = {
            id: crypto.randomUUID(),
            text: newTodo.trim(),
            completed: false,
            createdAt: new Date(),
        };

        settodos([todo,...todos]);
        setnewTodo('');
        toast({
            title: 'task added',
            description: 'your new task has been added to the list.'
        });
    };


    const toggleTodo = (id: string) => {
        settodos(
            todos.map((todo) => 
            todo.id === id? {...todo, completed: !todo.completed} : todo
            )
        );
    };

    const deleteTodo = (id: string) => {
        settodos(todos.filter((todo) => todo.id !== id));
        toast({
            title: 'task deleted',
            description: 'the task has been removed from your list.',
            variant: 'destructive',
        });
    };

    return(
        <Card className="w-full max-w-md p-6">
            <form onSubmit={addTodo} className="flex space-x-2 mb-6">
                <Input
                type="text"
                value={newTodo}
                onChange={(e) => setnewTodo(e.target.value)}
                placeholder="add your new todo"
                className="flex-1"
                />
                <Button type="submit">
                    <PlusCircle className="h-4 w-4 mr-2"/>
                    Add
                </Button>
            </form>

            <div className="space-y-1">
                {
                    todos.length === 0 ? (
                        <p className="text-center text-muted-foreground py-4">
                            No tasks yet. Add one !
                        </p>
                    ) : (
                        todos.map((todo) => (
                            <TodoItem 
                            key = {todo.id}
                            todo = {todo}
                            onToggle = {toggleTodo}
                            onDelete = {deleteTodo}
                            />
                        )
                    )
                )}
            </div>

            {todos.length > 0 && (
                <div>
                    {todos.filter((t) => t.completed).length} of {todos.length} tasks completed...
                </div>
            )}
        </Card>
    )

}

