import { getUserInfo, removeUserInfo } from "@/Services/auth.services";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
    const userInfo = getUserInfo()
    const router = useRouter()
    // console.log(isLoggedIn())
    const handleLogOut = () => {
        removeUserInfo();
        router.refresh();
    };
    return (
        <>
            {
                userInfo?.userId ? (
                    <Button color='error' onClick={handleLogOut}
                    >
                        Logout
                    </Button>

                ) : (

                    <Button component={Link}
                        href='/Login'
                    >
                        LOGIN
                    </Button>
                )
            }
        </>
    );
};

export default AuthButton;