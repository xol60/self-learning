export const adminMenu = [
    { //hệ thống
        name: 'menu.admin.manage-user.header', menus: [
            {
                name: 'menu.admin.manage-user.doctor', link: '/system/doctor-manage'
            },
            {
                name: 'menu.admin.manage-user.user', link: '/system/user-manage'
            },
            {
                name: 'menu.admin.manage-user.user-add', link: '/system/user-add',
            },
            {
                name: 'menu.admin.manage-user.schedule-add', link: '/system/schedule-add',
            },
        ],
    },
    {
        name: 'menu.admin.manage-speciality.header', menus: [

        ],
    },
    {
        name: 'menu.admin.manage-clinic.header', menus: [

        ]
    }
];
export const doctorMenu = [
    {
        name: 'menu.doctor.header', menus: [
            {
                name: 'menu.doctor.manage-schedule', link: '/system/manage/doctor-schedule'
            }
        ]
    }
]
