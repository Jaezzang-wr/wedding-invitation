const uniqueIdentifier = "JWK-WEDDING-TEMPLATE-V1";

// 갤러리 레이아웃 타입 정의
type GalleryLayout = "scroll" | "grid";
type GalleryPosition = "middle" | "bottom";

interface GalleryConfig {
  layout: GalleryLayout;
  position: GalleryPosition;
  images: string[];
}

export const weddingConfig = {
  // 메타 정보
  meta: {
    title: "이재창 ❤️ 한혜진의 결혼식에 초대합니다",
    description: "결혼식 초대장",
    ogImage: "/images/main_photo.jpg",
    noIndex: true,
    _jwk_watermark_id: uniqueIdentifier,
  },

  // 메인 화면
  main: {
    title: "Wedding Invitation",
    image: "/images/main_photo.jpg",
    date: "2026년 10월 17일 토요일 15시 30분",
    venue: "엘블레스"
  },

  // 소개글
  intro: {
    title: "",
    text: "저희 두 사람\n소중한 분들을 모시고\n평생을 함께할 첫걸음을 내딛고자 합니다.\n\n귀한 걸음으로 축복해주시면 감사하겠습니다."
  },

  // 결혼식 일정
  date: {
    year: 2026,
    month: 10,
    day: 17,
    hour: 15,
    minute: 30,
    displayDate: "2026.10.17 SAT PM 15:30",
  },

  // 장소 정보
  venue: {
    name: "엘블레스",
    address: "서울 서초구 강남대로 213 지하1층\n다이아몬드홀",
    tel: "02-526-0300",
    naverMapId: "엘블레스", // 네이버 지도 검색용 장소명
    coordinates: {
      latitude: 37.4827,
      longitude: 127.0349,
    },
    placeId: "37688101", // 네이버 지도 장소 ID
    mapZoom: "16.00", // 지도 줌 레벨
    mapNaverCoordinates: "127.0349479,37.4827664,16.00,0,0,0,dh", // 네이버 지도 길찾기 URL용 좌표 파라미터 (구 형식)
    transportation: {
      subway: "(3호선, 신분당선) 양재역 9번 출구 (바로 연결)",
      bus: "간선\n 140, 341, 400, 405, 421, 440, 441, 452, 470\n지선\n 0411, 4432, 4435\n(양재역, 서초문화예술회관에서 하차)",
    },
    parking: "서울시 서초구 강남대로 221번지\n네비게이션에 '양재역 주차장' 검색",
    // 신랑측 배차 안내
    groomShuttle: {
      location: "",
      departureTime: "",
      contact: {
        name: "",
        tel: ""
      }
    },
    // 신부측 배차 안내
    brideShuttle: {
      location: "",
      departureTime: "",
      contact: {
        name: "",
        tel: ""
      }
    }
  },

  // 갤러리
  gallery: {
    layout: "grid" as GalleryLayout, // "scroll" 또는 "grid" 선택
    position: "bottom" as GalleryPosition, // "middle" (현재 위치) 또는 "bottom" (맨 하단) 선택
    images: [
      "/images/gallery/pic1.jpg",
      "/images/gallery/pic2.jpg",
      "/images/gallery/pic3.jpg",
      "/images/gallery/pic4.jpg",
      "/images/gallery/pic5.jpg",
      "/images/gallery/pic6.jpg",
      "/images/gallery/pic7.jpg",
      "/images/gallery/pic8.jpg",
      "/images/gallery/pic9.jpg",
    ],
  } as GalleryConfig,

  // 초대의 말씀
  invitation: {
    message: "저희 두 사람 결혼합니다.\n평생을 함께하고 싶은 사람을 만났습니다.\n\n이제 서로의 든든한 편이 되어\n같은 길을 걸어가려 합니다.\n\n소중한 분들을 모시고\n저희의 첫 걸음을 내딛는 자리에\n귀한 걸음으로 축복해 주시면 감사하겠습니다.",
    groom: {
      name: "이재창",
      label: "아들",
      father: "이유균",
      mother: "이선희",
    },
    bride: {
      name: "한혜진",
      label: "딸",
      father: "한상욱",
      mother: "박은희",
    },
  },

  // 계좌번호
  account: {
    groom: {
      bank: "우리은행",
      number: "123-456-789012",
      holder: "이재창",
    },
    bride: {
      bank: "우리은행",
      number: "987-654-321098",
      holder: "한혜진",
    },
    groomFather: {
      bank: "은행명",
      number: "111-222-333444",
      holder: "이유균",
    },
    groomMother: {
      bank: "은행명",
      number: "555-666-777888",
      holder: "이선희",
    },
    brideFather: {
      bank: "은행명",
      number: "999-000-111222",
      holder: "한성욱",
    },
    brideMother: {
      bank: "은행명",
      number: "333-444-555666",
      holder: "박은희",
    }
  },

  // RSVP 설정
  rsvp: {
    enabled: false, // RSVP 섹션 표시 여부
    showMealOption: false, // 식사 여부 입력 옵션 표시 여부
  },

  // 슬랙 알림 설정
  slack: {
    webhookUrl: process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL || "",
    channel: "#wedding-response",
    compactMessage: true, // 슬랙 메시지를 간결하게 표시
  },
}; 
