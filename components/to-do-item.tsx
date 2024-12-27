"use client";

import { Todo } from "@/lib/types";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface TodoItemProps {
    todo: Todo;
    onToggle: (id:string) => void;
    onDelete: (id:string) => void;
}

export function TodoItem({todo, onToggle, onDelete} : TodoItemProps) {
    return (
        <div className="flex items-center justify-between space-x-2 py-2">
            <div className="flex items-center space-x-3"> 
                <Checkbox
                checked = {todo.completed}
                onCheckedChange={() => onToggle(todo.id)}
                />
                <span
                className={cn(
                    'text-sm transition-colors duration-200',
                    todo.completed && 'text-muted-foreground line-through'
                )}
                >
                    {todo.text}
                </span>
            </div>

            <Button variant="ghost" size="icon" 
            onClick={() => onDelete(todo.id)}
            className="h-8 w-8 text-destructive hover:text-destructive/90">
                <Trash2 className="h-4 w-4"/>
            </Button>
        </div>
    )
}