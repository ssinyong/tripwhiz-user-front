export interface IProductImage {
    uploadFileNames: string; // 기존 파일명을 나타내는 문자열 타입
    ord: number; // 순서
}

export interface IProduct {
    pno: number;               // 상품 번호
    pname: string;             // 상품 이름
    pdesc: string;             // 상품 설명
    price: number;             // 상품 가격
    categoryCno?: number | null; // 상위 카테고리 번호 (선택적)
    subCategoryScno?: number | null; // 하위 카테고리 번호 (선택적)
    themeTno?: number | null;     // 테마 번호 (선택적)
    fileName?: string;
    delflag: false// 이미지 경로 (선택적)
    uploadFileNames: IProductImage[]; // 기존 IProductImage 객체 배열
}

export interface ICartItem {
    product: IProduct
    qty: number
}