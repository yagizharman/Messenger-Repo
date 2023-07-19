import prisma from '@/app/libs/prismadb'

import getSession from './getSession'

const getCurrentUser = async () => {
    try {
        const session = await getSession();

        if (!session?.user?.email) {
            return null;
        }
        const currrentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string
            }
        })
        if (!currrentUser) {
            return null;

        }
        return currrentUser;
    }
    catch (error: any) {
        return null;
    }
}
export default getCurrentUser