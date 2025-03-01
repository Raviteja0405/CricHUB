let players = [
  {
    name: 'Rahul Reddy',
    img: 'https://f002.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z0e2621278a7d96a270300f13_f1162a12e63f39e7d_d20240803_m042524_c002_v0001162_t0010_u01722659124975',
    profileUrl : "https://stumpsapp.com/player/-O25IL33cu2IzjpiWouZ/",
    statisticsUrl: 'https://gateway.stumpsapp.com/users/-O25IL33cu2IzjpiWouZ/profile/statistics'
  },
  {
    name: 'Rahul',
    img: 'https://f002.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z0e2621278a7d96a270300f13_f118c3d266c578eeb_d20240803_m041651_c002_v0001151_t0007_u01722658611504',
    profileUrl : "https://stumpsapp.com/player/-O25IE2exrecMfkfALpN/",
    statisticsUrl: 'https://gateway.stumpsapp.com/users/-O25IE2exrecMfkfALpN/profile/statistics'
  },
  {
    name: 'Nikhil',
    img: 'https://f002.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z0e2621278a7d96a270300f13_f10068acde0abcbfe_d20240803_m094636_c002_v0203009_t0040_u01722678396901',
    profileUrl : "https://stumpsapp.com/player/-O3MbdoML3-F60WtAXKq/",
    statisticsUrl: 'https://gateway.stumpsapp.com/users/-O3MbdoML3-F60WtAXKq/profile/statistics'
  },
  {
    name: 'Deepanshu',
    img: 'https://f002.backblazeb2.com/file/stumps-prod-images/stock_images/250x250_profile/0025.jpg',
    profileUrl : "https://stumpsapp.com/player/-O3Lhwl42huppzdYe4k3/",
    statisticsUrl: 'https://gateway.stumpsapp.com/users/-O3Lhwl42huppzdYe4k3/profile/statistics'
  },
  {
    name: 'Ravi Teja',
    img: 'https://f002.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z0e2621278a7d96a270300f13_f1180ae76e4228164_d20240803_m042605_c002_v0203007_t0016_u01722659165612',
    profileUrl : "https://stumpsapp.com/player/-O25INygzbxwZwFgG1FX/",
    statisticsUrl: 'https://gateway.stumpsapp.com/users/-O25INygzbxwZwFgG1FX/profile/statistics'
  },
  {
    name: 'Ashfaq',
    img: 'https://f002.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z0e2621278a7d96a270300f13_f113c0558789c99aa_d20240803_m041824_c002_v0203008_t0036_u01722658704659',
    profileUrl : "https://stumpsapp.com/player/-O25IG9jVBHYnCFBNtCE/",
    statisticsUrl: 'https://gateway.stumpsapp.com/users/-O25IG9jVBHYnCFBNtCE/profile/statistics'
  },
  {
    name: 'Shakti',
    img: 'https://f002.backblazeb2.com/file/stumps-prod-images/stock_images/250x250_profile/0100.jpg',
    profileUrl : "https://stumpsapp.com/player/-O99hLxqvU6WEDCKEWtj/",
    statisticsUrl: 'https://gateway.stumpsapp.com/users/-O99hLxqvU6WEDCKEWtj/profile/statistics'
  },
  {
    name: 'Vishal',
    img: 'https://f002.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z0e2621278a7d96a270300f13_f115bf03e0bf7524b_d20240803_m042641_c002_v0001135_t0032_u01722659201148',
    profileUrl : "https://stumpsapp.com/player/-O3LM3rNoBQ6bSf6QmzX/",
    statisticsUrl: 'https://gateway.stumpsapp.com/users/-O3LM3rNoBQ6bSf6QmzX/profile/statistics'
  },
  {
    name: 'Raaj',
    img: 'https://f002.backblazeb2.com/file/stumps-prod-images/stock_images/250x250_profile/0018.jpg',
    profileUrl : "https://stumpsapp.com/player/-O8M7yF3aLdkoJDW4Bng/",
    statisticsUrl: 'https://gateway.stumpsapp.com/users/-O8M7yF3aLdkoJDW4Bng/profile/statistics'
  },
  {
    name: 'Vikas',
    img: 'https://f002.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z0e2621278a7d96a270300f13_f1049020e3508bc4b_d20240803_m041957_c002_v0203007_t0020_u01722658797197',
    profileUrl : "https://stumpsapp.com/player/-O25Iky_Ox4iNK3NN1vV/",
    statisticsUrl: 'https://gateway.stumpsapp.com/users/-O25Iky_Ox4iNK3NN1vV/profile/statistics'
  },
  {
    name: 'Komal',
    img: 'https://f002.backblazeb2.com/file/stumps-prod-images/stock_images/250x250_profile/0097.jpg',
    profileUrl : "https://stumpsapp.com/player/-OEqGAqRam2_Js5wNmR8/",
    statisticsUrl: 'https://gateway.stumpsapp.com/users/-OEqGAqRam2_Js5wNmR8/profile/statistics'
  },
  {
    name: 'Pushkar',
    img: 'https://f002.backblazeb2.com/file/stumps-prod-images/stock_images/250x250_profile/0058.jpg',
    profileUrl : "https://stumpsapp.com/player/-O8qUUo8MNOCrbXQ8JA5/",
    statisticsUrl: 'https://gateway.stumpsapp.com/users/-O8qUUo8MNOCrbXQ8JA5/profile/statistics'
  },
  {
    name: 'Shravan',
    img: 'https://f002.backblazeb2.com/file/stumps-prod-images/stock_images/250x250_profile/0017.jpg',
    profileUrl : "https://stumpsapp.com/player/-O8_ObwB9EogO25o9CNj/",
    statisticsUrl: 'https://gateway.stumpsapp.com/users/-O8_ObwB9EogO25o9CNj/profile/statistics'
  },
  {
    name: 'Balaram',
    img: 'https://f002.backblazeb2.com/file/stumps-prod-images/stock_images/250x250_profile/0052.jpg',
    profileUrl : "https://stumpsapp.com/player/-OEvKiHYtngHcGu8-S-Y/",
    statisticsUrl: 'https://gateway.stumpsapp.com/users/-OEvKiHYtngHcGu8-S-Y/profile/statistics'
  },
  {
    name: 'Vishal Reddy',
    img: 'https://f002.backblazeb2.com/file/stumps-prod-images/stock_images/250x250_profile/0079.jpg',
    profileUrl : "https://stumpsapp.com/player/-OAjRx3jILQLHjvOXMcj/",
    statisticsUrl: 'https://gateway.stumpsapp.com/users/-OAjRx3jILQLHjvOXMcj/profile/statistics'
  },
  {
    name: 'Prakash',
    img: 'https://f002.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z0e2621278a7d96a270300f13_f117836b45848c435_d20240803_m042742_c002_v0203009_t0030_u01722659262596',
    profileUrl : "https://stumpsapp.com/player/-O3LUWnh-p2-7JNQ85rX/",
    statisticsUrl: 'https://gateway.stumpsapp.com/users/-O3LUWnh-p2-7JNQ85rX/profile/statistics'
  },
  {
    name: 'Akshat',
    img: 'https://f002.backblazeb2.com/file/stumps-prod-images/stock_images/250x250_profile/0007.jpg',
    profileUrl : "https://stumpsapp.com/player/-OFF5qtHTD4q6jwqJUd4/",
    statisticsUrl: 'https://gateway.stumpsapp.com/users/-OFF5qtHTD4q6jwqJUd4/profile/statistics'
  },
  {
    name: 'Extra',
    img: 'https://f002.backblazeb2.com/file/stumps-prod-images/stock_images/250x250_profile/0014.jpg',
    profileUrl : "https://stumpsapp.com/player/-OBmQgFeIgETKpLJtiRg/",
    statisticsUrl: 'https://gateway.stumpsapp.com/users/-OBmQgFeIgETKpLJtiRg/profile/statistics'
  },
  {
    name: 'Chintu',
    img: 'https://f002.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z0e2621278a7d96a270300f13_f103d007b32214678_d20240811_m050822_c002_v0001164_t0051_u01723352902779',
    profileUrl : "https://stumpsapp.com/player/-O3NWm_Z-LwQyoe8Bj0n/",
    statisticsUrl: 'https://gateway.stumpsapp.com/users/-O3NWm_Z-LwQyoe8Bj0n/profile/statistics'
  }
]

export default players;