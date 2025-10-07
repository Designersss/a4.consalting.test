export const getDefault = async ({ path }: { path: string }) => {
    try {
        const data = await fetch(process.env.NEXT_PUBLIC_BASE_URL_API + path, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "no-cache",
                "Access-Control-Allow-Origin": "*",
                Accept: "application/json",
            },
        });

        return data.json();
    } catch (error) {
        console.error(error);
    }
};
