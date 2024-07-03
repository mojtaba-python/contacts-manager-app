const members = [
    {
        fullname: " علی لطیفی",
        photo: "../image/team4.png",
        mobile: "09375673035",
        email: "ali@gmail.com",
        job: "back-end Developer",
        group: "2",
        id: 1
        },
    {
        fullname: "مجتبی بخشی پور",
        photo: "../image/lenovo1.jpg",
        mobile: "09375674164",
        email: "moji@gmail.com",
        job: "front-end Developer",
        group: "1",
        id: 2
    },
    
];

const groups = [
    
    {
        id: "1",
        name: "همکار"
    },
    {
        id: "1",
        name: "همکار"
    },
    {
        id: "2",
        name: "دوست"
    },
    {
        id: "3",
        name: "فامیل"
    },
    {
        id: "4",
        name: "سرویس"
    },
    {
        id: "5",
        name: "آشنا"
    }
]

export function getMembers() {
    return members;
};
export function Groups() {
    return groups;
};