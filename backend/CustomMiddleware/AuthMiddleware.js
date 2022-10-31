import jwt from "jsonwebtoken";

export const validateToken = async (req, res, next) => {
    const accessToken = req.header("token");
    if (!accessToken) return res.json({ error: "You are not logged in!!" })
    else {
        try {
            const validToken = jwt.verify(accessToken, "tokenizer2022");
            req.user = validToken;
            if (validToken) {
                return next();
            }
        } catch (error) {
            return res.json({ error: error })
        }
    }
}