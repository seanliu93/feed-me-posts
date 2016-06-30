# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
users = [
  {
    email: 'test@test.com',
    password: 'blahblah',
    password_confirmation: 'blahblah'
  },
  {
    email: 'seanliu@bu.com',
    password: 'blahblah',
    password_confirmation: 'blahblah'
  }
]

users.each do |user|
  User.create!(user)
end