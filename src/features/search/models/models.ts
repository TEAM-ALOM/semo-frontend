export interface Professor {
  id: number;
  name: string;
  labLocation: string;
  phoneNumber: string;
  email: string;
  department: string;
}

export interface Site {
  id: number;
  type: number;
  name: string;
  description: string;
  url: string;
  keywords: string[];
}

// 검색 결과를 위한 유니온 타입
export type SearchResultTypes = Professor | Site;
