const data = [
  {
    objectId: '1zVNlBj4FP',
    createdAt: '2016-07-19T03:55:56.666Z',
    updatedAt: '2017-10-03T08:26:04.647Z',
    type: 'police_general',
    group: 'police',
    en: 'Police General',
    typeGroup: 'EMERGENCY',
    filterGroup: ['police'],
    iconName: 'ic-113',
    iconBackgroundColor: '#F4C757',
    vi: '113 Chung',
    sortOrder: 1,
    iconSize: 30,
    shortnameVi: 'Chung',
    shortnameEn: 'General',
    isActive: true
  },
  {
    objectId: '4wIl8vPdg5',
    createdAt: '2016-10-31T02:57:30.133Z',
    updatedAt: '2017-09-12T08:00:17.092Z',
    group: 'violation_incident',
    filterGroup: ['idea-incident'],
    sortOrder: 1,
    type: 'travel_incident',
    en: 'Travel Violation',
    typeGroup: 'REPORT',
    iconBackgroundColor: '#43BCE8',
    iconName: 'ic-travel-breach',
    vi: 'Vi phạm du lịch',
    iconSize: 30,
    shortnameVi: 'Du lịch',
    shortnameEn: 'Travel',
    isActive: false
  },
  {
    objectId: '5O0Bs5HXGv',
    createdAt: '2016-07-19T03:58:21.333Z',
    updatedAt: '2017-10-03T08:25:59.469Z',
    group: 'firefighter',
    type: 'fire_general',
    en: 'Fire General',
    typeGroup: 'EMERGENCY',
    filterGroup: ['firefighter'],
    iconName: 'ic-114',
    iconBackgroundColor: '#FF524E',
    vi: '114 Chung',
    sortOrder: 1,
    iconSize: 30,
    shortnameVi: 'Chung',
    shortnameEn: 'General',
    isActive: true
  },
  {
    objectId: '7PHp8DzIxD',
    createdAt: '2016-10-21T11:26:30.840Z',
    updatedAt: '2017-10-06T10:48:22.556Z',
    group: 'security_service',
    filterGroup: ['security-service'],
    type: 'security_service',
    en: 'Bodyguard',
    typeGroup: 'HELP',
    iconName: 'ic-bodyguard',
    iconBackgroundColor: '#222222',
    vi: 'Vệ sĩ',
    sortOrder: 1,
    iconSize: 30,
    shortnameVi: 'Vệ sĩ',
    shortnameEn: 'Bodyguard',
    isActive: true
  },
  {
    objectId: '9RSlXy5q4l',
    group: 'firefighter',
    createdAt: '2016-07-19T04:06:17.237Z',
    updatedAt: '2017-09-11T08:48:04.141Z',
    type: 'house_collapse',
    en: 'House Collapse',
    typeGroup: 'EMERGENCY',
    filterGroup: ['firefighter'],
    iconName: 'ic-collapse',
    iconBackgroundColor: '#FE913D',
    vi: 'Sập nhà',
    sortOrder: 3,
    iconSize: 30,
    shortnameVi: 'Sập nhà',
    shortnameEn: 'House\\nCollapse',
    isActive: true
  },
  {
    objectId: 'DmKWoGmD6B',
    createdAt: '2016-10-24T04:29:48.504Z',
    updatedAt: '2017-09-11T08:42:46.059Z',
    group: 'police',
    filterGroup: ['police'],
    type: 'robbery',
    en: 'Robbery',
    iconName: 'ic-robbery',
    iconBackgroundColor: '#36404D',
    typeGroup: 'EMERGENCY',
    vi: 'Trộm cướp',
    sortOrder: 4,
    iconSize: 30,
    shortnameVi: 'Trộm cướp',
    shortnameEn: 'Robbery',
    isActive: true
  },
  {
    objectId: 'FDqkaQ7ll0',
    type: 'help_blood',
    createdAt: '2016-09-19T10:24:47.433Z',
    updatedAt: '2017-09-11T09:04:25.554Z',
    en: 'Blood Donate',
    vi: 'Hiến máu',
    typeGroup: 'HELP',
    group: 'medicare',
    filterGroup: ['medicare'],
    iconName: 'ic-blooddonation',
    iconBackgroundColor: '#F35656',
    sortOrder: 1,
    iconSize: 30,
    shortnameVi: 'Hiến máu',
    shortnameEn: 'Blood Donate',
    isActive: true
  },
  {
    objectId: 'I1LG4RkOZf',
    createdAt: '2016-06-17T04:41:15.990Z',
    updatedAt: '2017-09-11T08:46:25.119Z',
    type: 'threatening',
    group: 'police',
    en: 'Life Threatening',
    typeGroup: 'EMERGENCY',
    filterGroup: ['police'],
    iconName: 'ic-lifethreatening',
    iconBackgroundColor: '#285935',
    vi: 'Đe doạ tính mạng',
    sortOrder: 2,
    iconSize: 30,
    shortnameVi: 'Đe doạ\\ntính mạng',
    shortnameEn: 'Life\\nThreatening',
    isActive: true
  },
  {
    objectId: 'JK7fZ4ABqw',
    group: 'violation_incident',
    createdAt: '2016-10-31T02:45:14.322Z',
    updatedAt: '2017-10-03T09:21:55.608Z',
    filterGroup: ['violation-incident'],
    sortOrder: 2,
    type: 'construction_incident',
    en: 'Construction Violation',
    typeGroup: 'REPORT',
    iconBackgroundColor: '#554949',
    iconName: 'ic-construction-incident',
    vi: 'Vi phạm xây dựng',
    iconSize: 30,
    shortnameVi: 'Xây dựng',
    shortnameEn: 'Construction',
    isActive: true
  },
  {
    objectId: 'LuBh2pqz0X',
    createdAt: '2016-10-24T07:23:09.850Z',
    updatedAt: '2017-09-11T09:04:40.064Z',
    group: 'medicare',
    filterGroup: ['medicare'],
    type: 'medical_service',
    en: 'Medical Service',
    iconName: 'ic-medicalservice',
    iconBackgroundColor: '#8a97d6',
    typeGroup: 'HELP',
    vi: 'Dịch vụ y tế',
    sortOrder: 3,
    iconSize: 30,
    shortnameVi: 'Dịch vụ\\ny tế',
    shortnameEn: 'Medical\\nService',
    isActive: true
  },
  {
    objectId: 'MMfs3i3oKo',
    createdAt: '2016-10-24T04:25:48.813Z',
    updatedAt: '2017-09-11T08:42:02.401Z',
    group: 'medicare',
    filterGroup: ['medicare'],
    type: 'nurse',
    en: 'Nurse',
    typeGroup: 'HELP',
    vi: 'Điều dưỡng',
    iconName: 'ic-nurse',
    iconBackgroundColor: '#ce7ab5',
    sortOrder: 2,
    iconSize: 30,
    shortnameVi: 'Điều dưỡng',
    shortnameEn: 'Nurse',
    isActive: true
  },
  {
    objectId: 'NKpOrSpUNd',
    createdAt: '2016-07-19T04:20:14.073Z',
    updatedAt: '2017-09-11T10:33:46.740Z',
    group: 'ambulance',
    type: 'ambulance_accident',
    en: 'Traffic Accident',
    vi: 'Tai nạn giao thông',
    typeGroup: 'EMERGENCY',
    filterGroup: ['ambulance'],
    iconName: 'ic-accident',
    iconBackgroundColor: '#E96562',
    sortOrder: 2,
    iconSize: 30,
    shortnameVi: 'Tai nạn\\ngiao thông',
    shortnameEn: 'Traffic\\nAccident',
    isActive: true
  },
  {
    objectId: 'Nl1yJycp6B',
    group: 'violation_incident',
    createdAt: '2016-10-31T10:04:53.139Z',
    updatedAt: '2017-09-11T08:41:24.695Z',
    filterGroup: ['idea-incident'],
    sortOrder: 4,
    type: 'environment_incident',
    en: 'Environment Violation',
    vi: 'Vi phạm môi trường',
    typeGroup: 'REPORT',
    iconBackgroundColor: '#2EC765',
    iconName: 'ic-natural-incident',
    iconSize: 30,
    shortnameVi: 'Môi trường',
    shortnameEn: 'Environment',
    isActive: true
  },
  {
    objectId: 'Oogqj9nRcr',
    createdAt: '2016-09-20T04:25:36.971Z',
    updatedAt: '2017-09-12T08:35:04.125Z',
    type: 'alarm',
    group: '',
    typeGroup: 'EMERGENCY',
    en: 'SOS',
    vi: 'SOS',
    filterGroup: ['police'],
    iconName: 'ic-sos',
    iconBackgroundColor: '#ec645e',
    iconSize: 30,
    shortnameVi: 'SOS',
    shortnameEn: 'SOS',
    isActive: true
  },
  {
    objectId: 'Qn2kdyQkEz',
    iconName: 'ic-food-safety',
    createdAt: '2017-02-03T04:39:14.233Z',
    updatedAt: '2017-09-11T08:41:01.131Z',
    typeGroup: 'REPORT',
    filterGroup: ['violation-incident'],
    en: 'Food Violation',
    sortOrder: 5,
    type: 'food_violation',
    group: 'violation_incident',
    iconSize: 30,
    iconBackgroundColor: '#00A499',
    vi: 'Vi phạm thực phẩm',
    shortnameVi: 'Thực phẩm',
    shortnameEn: 'Food',
    isActive: true
  },
  {
    objectId: 'TBEEhDAL6S',
    createdAt: '2016-07-19T04:20:27.418Z',
    updatedAt: '2017-10-03T08:22:58.887Z',
    group: 'firefighter',
    type: 'fire_drowning',
    en: 'Drowning',
    vi: 'Đuối nước',
    typeGroup: 'EMERGENCY',
    filterGroup: ['firefighter'],
    iconName: 'ic-drowning',
    iconBackgroundColor: '#588FDB',
    sortOrder: 4,
    iconSize: 30,
    shortnameVi: 'Đuối nước',
    shortnameEn: 'Drowning',
    isActive: true
  },
  {
    objectId: 'WfFnBxB7jc',
    updatedAt: '2017-09-11T08:45:57.605Z',
    type: 'police_accident',
    createdAt: '2016-06-17T04:41:23.206Z',
    group: 'police',
    en: 'Traffic Accident',
    typeGroup: 'EMERGENCY',
    filterGroup: ['police'],
    iconName: 'ic-accident',
    iconBackgroundColor: '#F46362',
    vi: 'Tai nạn giao thông',
    sortOrder: 3,
    iconSize: 30,
    shortnameVi: 'Tai nạn\\ngiao thông',
    shortnameEn: 'Traffic\\nAccident',
    isActive: true
  },
  {
    objectId: 'dFMfbcLGhu',
    updatedAt: '2017-09-11T09:06:01.392Z',
    typeGroup: 'HELP',
    createdAt: '2016-10-21T09:44:53.331Z',
    group: 'general_service',
    type: 'vehice_repair',
    filterGroup: ['general-service'],
    en: 'Vehicle Repair',
    iconName: 'ic-vehiclerepair',
    iconBackgroundColor: '#D17449',
    vi: 'Sửa xe',
    sortOrder: 1,
    iconSize: 30,
    shortnameVi: 'Sửa xe',
    shortnameEn: 'Vehicle\\nRepair',
    isActive: true
  },
  {
    objectId: 'eN1H5pdqex',
    updatedAt: '2017-09-11T08:41:39.355Z',
    group: 'violation_incident',
    createdAt: '2016-10-31T02:55:09.206Z',
    filterGroup: ['violation-incident'],
    type: 'traffic_incident',
    en: 'Traffic Violation',
    typeGroup: 'REPORT',
    iconBackgroundColor: '#FF8433',
    iconName: 'ic-traffic-incident',
    vi: 'Vi phạm giao thông',
    sortOrder: 3,
    iconSize: 30,
    shortnameVi: 'Giao thông',
    shortnameEn: 'Traffic',
    isActive: true
  },
  {
    objectId: 'fus1ag7oib',
    en: 'Goverment Announcement',
    createdAt: '2017-02-03T07:33:50.331Z',
    updatedAt: '2017-09-11T08:41:51.714Z',
    group: 'gov_announcement',
    type: 'gov_announcement',
    typeGroup: 'NOTIFY',
    filterGroup: ['gov_announcement'],
    iconName: 'ic-safehouse',
    iconBackgroundColor: '#3DD8A3',
    iconSize: 30,
    vi: 'Thông báo',
    shortnameVi: 'Thông báo\\nchính phủ',
    shortnameEn: 'Announcement',
    isActive: true
  },
  {
    objectId: 'h5bZWgJChO',
    updatedAt: '2017-10-03T08:25:54.960Z',
    group: 'ambulance',
    createdAt: '2016-07-19T04:16:20.433Z',
    type: 'ambulance_general',
    en: 'Ambulance General',
    typeGroup: 'EMERGENCY',
    filterGroup: ['ambulance'],
    iconName: 'ic-115',
    iconBackgroundColor: '#57E9F4',
    vi: '115 Chung',
    sortOrder: 1,
    iconSize: 30,
    shortnameVi: 'Chung',
    shortnameEn: 'General',
    isActive: true
  },
  {
    objectId: 'miUoFlK0Zd',
    createdAt: '2016-12-15T09:52:10.131Z',
    updatedAt: '2017-09-11T08:41:14.541Z',
    group: 'danger_incident',
    filterGroup: ['danger-incident'],
    sortOrder: 3,
    en: 'Electrical Problem',
    vi: 'Sự cố điện',
    type: 'electric_problem',
    typeGroup: 'REPORT',
    iconName: 'ic-electricwive',
    iconBackgroundColor: '#6E7CC5',
    iconSize: 30,
    shortnameVi: 'Sự cố điện',
    shortnameEn: 'Electrical\\nProblem',
    isActive: true
  },
  {
    objectId: 'pOiN6NyTv5',
    updatedAt: '2017-09-11T08:41:09.217Z',
    group: 'danger_incident',
    createdAt: '2016-12-15T09:55:28.604Z',
    filterGroup: ['danger-incident'],
    sortOrder: 2,
    type: 'infrastructure_problem',
    en: 'Infrastructure Problem',
    vi: 'Hư hỏng cầu đường',
    typeGroup: 'REPORT',
    iconBackgroundColor: '#6D6D6D',
    iconName: 'ic-pot-hole',
    iconSize: 30,
    shortnameVi: 'Hư hỏng\\ncầu đường',
    shortnameEn: 'Infrastructure\\nProblem',
    isActive: true
  },
  {
    objectId: 'qj7AncWUGi',
    createdAt: '2016-07-19T03:58:57.266Z',
    updatedAt: '2017-09-11T08:48:06.291Z',
    group: 'firefighter',
    type: 'Fire_Explosion',
    en: 'Fire/Explosion',
    typeGroup: 'EMERGENCY',
    filterGroup: ['firefighter'],
    iconName: 'ic-explosion',
    iconBackgroundColor: '#D47F02',
    vi: 'Cháy nổ',
    sortOrder: 2,
    iconSize: 30,
    shortnameVi: 'Cháy nổ',
    shortnameEn: 'Fire/\\nExplosion',
    isActive: true
  },
  {
    objectId: '3iNV0LNjFS',
    iconName: 'ic-idea',
    createdAt: '2017-03-02T03:15:27.273Z',
    updatedAt: '2017-09-14T04:15:18.379Z',
    typeGroup: 'REPORT',
    en: 'Idea',
    sortOrder: 1,
    vi: 'Ý tưởng',
    iconSize: 30,
    type: 'ideas',
    iconBackgroundColor: '#FFD74B',
    group: 'idea_incident',
    shortnameVi: 'Ý tưởng',
    shortnameEn: 'Idea',
    isActive: true
  },
  {
    objectId: 'UUNJWSvREm',
    iconName: 'ic-dangerous',
    createdAt: '2017-03-03T03:14:44.692Z',
    updatedAt: '2017-09-11T08:40:43.821Z',
    typeGroup: 'REPORT',
    filterGroup: ['danger-other'],
    en: 'Danger Other',
    vi: 'Nguy hiểm khác',
    sortOrder: 1,
    iconSize: 30,
    type: 'danger_other',
    group: 'danger_incident',
    iconBackgroundColor: '#FF8433',
    shortnameVi: 'Khác',
    shortnameEn: 'Other',
    isActive: true
  },
  {
    objectId: '5DwL873tVt',
    iconName: 'ic-forestfires',
    createdAt: '2017-10-03T08:32:02.512Z',
    updatedAt: '2017-10-06T10:48:03.280Z',
    typeGroup: 'EMERGENCY',
    sortOrder: 5,
    filterGroup: ['firefighter'],
    type: 'forest_fire',
    group: 'firefighter',
    en: 'Forest Fire',
    vi: 'Cháy rừng',
    iconSize: 30,
    iconBackgroundColor: '#EE383B',
    shortnameEn: 'Forest Fire',
    shortnameVi: 'Cháy rừng',
    isActive: true
  },
  {
    objectId: 'TEJa6F9HRi',
    iconName: 'ic-doctor',
    createdAt: '2017-10-03T08:48:50.610Z',
    updatedAt: '2017-10-06T10:47:48.812Z',
    sortOrder: 4,
    typeGroup: 'HELP',
    filterGroup: ['medicare'],
    type: 'doctor',
    group: 'medicare',
    en: 'Doctor',
    vi: 'Bác sĩ',
    iconSize: 30,
    iconBackgroundColor: '#1EBBA5',
    shortnameEn: 'Doctor',
    shortnameVi: 'Bác sĩ',
    isActive: true
  },
  {
    objectId: 'HljNiJKAPq',
    iconName: 'ic-construction-security',
    createdAt: '2017-10-03T09:00:33.206Z',
    updatedAt: '2017-10-06T10:48:38.481Z',
    typeGroup: 'HELP',
    sortOrder: 2,
    filterGroup: ['security-service'],
    type: 'construction_security',
    group: 'security_service',
    en: 'Construction Security',
    vi: 'Bảo vệ xây dựng',
    shortnameEn: 'Construction\\nSecurity',
    shortnameVi: 'Bảo vệ\\nxây dựng',
    iconBackgroundColor: '#4C4C4D',
    iconSize: 30,
    isActive: true
  },
  {
    objectId: 'hyuqckYlNd',
    iconName: 'ic-report',
    createdAt: '2017-10-03T09:21:29.328Z',
    updatedAt: '2017-10-06T10:48:53.039Z',
    typeGroup: 'REPORT',
    sortOrder: 1,
    filterGroup: ['violation-incident'],
    type: 'violation_general',
    group: 'violation_incident',
    en: 'General',
    vi: 'Chung',
    iconSize: 30,
    iconBackgroundColor: '#D02F29',
    shortnameEn: 'General',
    shortnameVi: 'Chung',
    isActive: true
  }
];
export default data;
