User.create!([
  {
    name: 'admin',
    email: 'admin@example.com',
    role: 'admin',
    password_digest: '$2a$10$HjQH2VBdguACJLyZHoVSs.yBZbwypqY3vUJGnxlWj94rmilWIuWzK',
    register_user: 1,
    update_user: 1,
    lock_version: 0,
    activated_at: '2020-02-03 00:00:00',
    deleted_at: nil,
  },
  {
    name: 'member',
    email: 'member@example.com',
    role: 'member',
    password_digest: '$2a$10$HjQH2VBdguACJLyZHoVSs.yBZbwypqY3vUJGnxlWj94rmilWIuWzK',
    register_user: 1,
    update_user: 1,
    lock_version: 0,
    activated_at: '2020-02-03 00:00:00',
    deleted_at: nil,
  },
])