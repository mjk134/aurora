export const wait = async (time: number) => new Promise((resolve, reject) => {
    setTimeout(() => resolve("success"), time)
})