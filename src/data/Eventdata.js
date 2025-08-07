export const eventData = [
  {
    id: "2018",
    slug: "2018",
    title: "TEDxBangkokYouth สนามเด็กเล่า",
    date: "วันที่ 18 พฤศจิกายน 2018",
    venue: "โรงละครอักษรา คิงเพาเวอร์",
    leftBanner: "/Event/2018/left banner.png",
    banner: "/Event/2018/banner2018.png",
    highlight: "/Event/2018/highlight2018.png",
    description: "TEDxBangkok ปีนี้ ขอชวนทุกท่าน ไม่ว่าจะอยู่ในช่วงวัยใดของชีวิต ร่วมเป็นส่วนหนึ่งของผู้ชมเวที \"TEDxYouth@Bangkok\" พื้นที่แห่ง \"สนามเด็กเล่า\" ที่เปิดโอกาสให้เด็กไทยได้มา \"ปล่อยของ\" ผ่านทอร์กและการแสดง 10 ชุด บอกเล่าไอเดียและเรื่องราวอันควรค่าแก่การเผยแพร่ ส่งต่อแรงบันดาลใจดี ๆ ให้กับทุกคน เพื่อนำกลับไปสร้างการเปลี่ยนแปลงให้ชีวิตและสังคม",
    keywords: [
      "Education",
      "Art / Design", 
      "Leaders",
      "Bold Ideas",
      "Environmental Advocacy Challenge"
    ],
    speakers: [
      {
        name: "อ๊ะอาย",
        fullName: "กรณิศ เล้าสุบินประเสริฐ",
        imageUrl: "/Event/2018/อ๊ะอาย.webp",
        description: "สาวน้อยเสียงใสผู้มีผลงานจากละครเวทีต่างๆมามากมาย ตั้งคำถามว่า ทำไมละครและภาพยนต์ไทยถึงมีเด็ก รับบท \"พระเอก นางเอก\" น้อยมาก ทำไมผู้ใหญ่ถึงชอบถามเด็กว่...(อ่านต่อ)"
      },
      {
        name: "บุ๊ค",
        fullName: "ธนายุทธ ณ อยุธยา",
        imageUrl: "/Event/2018/บุ๊ค.jfif",
        description: ""
      },
      {
        name: "นิว",
        fullName: "สุรีรัตน์ พรสิริรัตน์",
        imageUrl: "/Event/2018/นิว.webp",
        description: ""
      },
        {
        name: "Tedx",
        fullName: "Ted talk",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0NfsQx_-GICZJcadqDeNBMvwzq-RInkcOzg&s",
        description: "A TED talk description"
        },
      {
        name: "ทีม",
        fullName: "ปณิธิ วณสิริกุล",
        imageUrl: "/Event/2018/ทีม.jfif",
        description: ""
      }
    ]
  },
  {
    id: "2019",
    slug: "2019",
    title: "TEDxBangkokYouth 2019",
    date: "วันที่ 15 มีนาคม 2019",
    venue: "โรงละครอักษรา คิงเพาเวอร์",
    leftBanner: "/Event/2018/left banner.png",
    banner: "/Event/2019/banner2019.png",
    highlight: "/Event/2018/highlight2018.png",
    description: "อีเวนต์ TEDx ในปี 2019 ที่นำเสนอไอเดียใหม่ๆ จากผู้บรรยายที่หลากหลาย",
    keywords: [
      "Innovation",
      "Technology",
      "Social Change",
      "Youth Leadership"
    ],
     speakers: [
      {
        name: "Tedx",
        fullName: "Ted talk",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0NfsQx_-GICZJcadqDeNBMvwzq-RInkcOzg&s",
        description: "A TED talk description"
        },
        {
        name: "Tedx",
        fullName: "Ted talk",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0NfsQx_-GICZJcadqDeNBMvwzq-RInkcOzg&s",
        description: "A TED talk description"
        },
          {
        name: "Tedx",
        fullName: "Ted talk",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0NfsQx_-GICZJcadqDeNBMvwzq-RInkcOzg&s",
        description: "A TED talk description"
        },
        {
        name: "Tedx",
        fullName: "Ted talk",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0NfsQx_-GICZJcadqDeNBMvwzq-RInkcOzg&s",
        description: "A TED talk description"
        },
        {
        name: "Tedx",
        fullName: "Ted talk",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0NfsQx_-GICZJcadqDeNBMvwzq-RInkcOzg&s",
        description: "A TED talk description"
        },
    ]
  }
];

export const getEventBySlug = (slug) => {
  return eventData.find(event => event.slug === slug);
};

export const getAllEventSlugs = () => {
  return eventData.map(event => event.slug);
};
