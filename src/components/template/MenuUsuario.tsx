import { Avatar, Menu } from "@mantine/core";
import React, { useContext } from "react";
import Link from "next/link";
import { IconCoin, IconLogout, IconUserCircle } from "@tabler/icons-react";
import AutenticacaoContext from "@/data/contexts/AutenticacaoContext";

export default function MenuUsuario() {

    const { usuario, logout } = useContext(AutenticacaoContext)

    return (
        <Menu
            width={220}
            position="top-end"
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
                        className="w-10"
                        radius="xl"
                    />
                </div>
            </Menu.Target>
            <Menu.Dropdown className="fixed left-0 top-20 px-6 py-3 rounded-lg bg-zinc-700 mt-10">
                <div className="flex flex-col justify-center gap-y-2">
                    <Link href="/usuario">
                        <Menu.Label>
                            <span className="flex items-center gap-x-2 gap-y-1">
                                <IconUserCircle size={20} /> Usuário
                            </span>
                        </Menu.Label>
                    </Link>
                    <Link href="/">
                        <Menu.Item>
                            <span className="flex items-center gap-x-2 gap-y-1">
                                <IconCoin size={20} /> Finanças
                            </span>
                        </Menu.Item>
                    </Link>
                    <hr className="w" />
                    <Menu.Item
                        onClick={logout}
                    >
                        <span className="flex items-center gap-x-2 gap-y-1 text-red-500"><IconLogout />Sair</span>
                    </Menu.Item>
                </div>
            </Menu.Dropdown>
        </Menu>
    )
}