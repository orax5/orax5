// 토큰에서 추출할 필드 정의하는 인터페이스
export interface JwtPayload{
    nickname : string
    account: string
    usergrade: number
    lat?: number
    exp?: number
}
