import { getUser } from "@/api/user";
import { useEffect, useState } from "react";

interface IUser {
    username: string
}

export function useUser() {
    const [user, setUser] = useState<IUser>()
    useEffect(() => {
        (
            async function () {
                const response: IUser = await getUser()
                setUser(response)
            }
        )()
    }, [])


    return [user];
}
