import cookies from "next-cookies"

export function unAuthPage(context) {
    return new Promise((resolve, reject) => {
        const cookiesData = cookies(context)

        if(cookiesData.email) {
            return context.res.writeHead(302, {
                Location: '/dashboard/diseases'
            }).end();
        }

        return resolve('unauth')
    })
}

export function authPage(context) {
    return new Promise(resolve => {
        const cookiesData = cookies(context)

        if(!cookiesData.email) {
            return resolve({
                redirect: {
                    destination: '/login'
                }
            })
        }

        return resolve({
            email: cookiesData.email
        })
    })
}