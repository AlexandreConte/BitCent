import { Avatar, Button, Menu, rem } from "@mantine/core";
import usuario from "@/data/constants/usuarioFalso";
import React from "react";
import Link from "next/link";
import { IconCoin, IconUser } from "@tabler/icons-react";

export default function MenuUsuario() {

    return (
        <Menu
            width={220}
            position="top-end"
            withinPortal={false}
        >
            <Menu.Target>
                <div className="flex items-center gap-3 cursor-pointer">
                    <div className="hidden md:flex flex-col select-none">
                        <span className="text-sm font-bold text-zinc-200">
                            {usuario?.nome}
                        </span>
                        <span className="text-xs text-zinc-400">
                            {usuario?.email}
                        </span>
                    </div>
                    <Avatar
                        size={40}
                        src={usuario?.imagemUrl ?? "/user.svg"}
                        radius="xl"
                    />
                </div>
            </Menu.Target>
            <Menu.Dropdown className="fixed left-0 top-20 px-6 py-3 rounded-lg bg-zinc-700 my-10">
                <div className="flex flex-col justify-center gap-y-2">
                    <Menu.Label>
                        <span className="flex items-center gap-x-2 gap-y-1">
                            <IconUser /> Usuário
                        </span>
                    </Menu.Label>
                    <Link href="/">
                        <Menu.Item>
                            <span className="flex items-center gap-x-2 gap-y-1">
                                <IconCoin /> Finanças
                            </span>
                        </Menu.Item>
                    </Link>
                </div>
            </Menu.Dropdown>
        </Menu>
    )
}