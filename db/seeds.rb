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
  }, 
]

posts = [
  {
    user_id: 1,
    title: 'Random post',
    content: 'This is content for a random post!'
  },
  {
    user_id: 2,
    title: 'Another random post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices porttitor rutrum. Quisque venenatis risus mauris, at sollicitudin orci venenatis id. Duis ullamcorper nisi iaculis eros sodales, vitae porttitor felis viverra. Nam rhoncus odio quis justo molestie, et convallis nibh feugiat. Donec dapibus auctor tortor, quis maximus justo blandit at. Nullam finibus arcu at felis scelerisque fermentum. Vivamus at venenatis dui. Integer sed pharetra ex. Vivamus vel dictum velit. Phasellus sodales dui augue, vitae interdum nulla malesuada sed. Proin tincidunt blandit elit, a efficitur enim laoreet et. In hac habitasse platea dictumst. Phasellus id lacus eget tellus placerat ornare ut eget leo. Fusce gravida tincidunt dui, in malesuada metus pharetra vel. Etiam nec ligula euismod, vestibulum ligula eu, sagittis nulla.

'},
  {
    user_id: 1,
    title: 'Yet another random post',
    content: 'Donec dapibus auctor tortor, quis maximus justo blandit at. Nullam finibus arcu at felis scelerisque fermentum. Vivamus at venenatis dui. Integer sed pharetra ex. Vivamus vel dictum velit. Phasellus sodales dui augue, vitae interdum nulla malesuada sed. Proin tincidunt blandit elit, a efficitur enim laoreet et. In hac habitasse platea dictumst. Phasellus id lacus eget tellus placerat ornare ut eget leo. Fusce gravida tincidunt dui, in malesuada metus pharetra vel. Etiam nec ligula euismod, vestibulum ligula eu, sagittis nulla.

'},
  {
    user_id: 2,
    title: 'How many random posts are there gonna be',
    content: 'Donec dapibus auctor tortor, quis maximus justo blandit at. Nullam finibus arcu at felis scelerisque fermentum. Vivamus at venenatis dui. Integer sed pharetra ex. Vivamus vel dictum velit. Phasellus sodales dui augue, vitae interdum nulla malesuada sed. Proin tincidunt blandit elit, a efficitur enim laoreet et. In hac habitasse platea dictumst. Phasellus id lacus eget tellus placerat ornare ut eget leo. Fusce gravida tincidunt dui, in malesuada metus pharetra vel. Etiam nec ligula euismod, vestibulum ligula eu, sagittis nulla.

'
  },
  {
    user_id: 1,
    title: 'How to go snowboarding',
    content: 'Donec dapibus auctor tortor, quis maximus justo blandit at. Nullam finibus arcu at felis scelerisque fermentum. Vivamus at venenatis dui. Integer sed pharetra ex. Vivamus vel dictum velit. Phasellus sodales dui augue, vitae interdum nulla malesuada sed. Proin tincidunt blandit elit, a efficitur enim laoreet et. In hac habitasse platea dictumst. Phasellus id lacus eget tellus placerat ornare ut eget leo. Fusce gravida tincidunt dui, in malesuada metus pharetra vel. Etiam nec ligula euismod, vestibulum ligula eu, sagittis nulla.

'
  },
  {
    user_id: 1,
    title: 'I love skiing!',
    content: 'Donec dapibus auctor tortor, quis maximus justo blandit at. Nullam finibus arcu at felis scelerisque fermentum. Vivamus at venenatis dui. Integer sed pharetra ex. Vivamus vel dictum velit. Phasellus sodales dui augue, vitae interdum nulla malesuada sed. Proin tincidunt blandit elit, a efficitur enim laoreet et. In hac habitasse platea dictumst. Phasellus id lacus eget tellus placerat ornare ut eget leo. Fusce gravida tincidunt dui, in malesuada metus pharetra vel. Etiam nec ligula euismod, vestibulum ligula eu, sagittis nulla.

'
  }
]

comments = [
  {
    user_id: 1,
    post_id: 3,
    content: 'This is content for a random comment!'
  },
  {
    user_id: 2,
    post_id: 3,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices porttitor rutrum. Quisque venenatis risus mauris, at sollicitudin orci venenatis id. Duis ullamcorper nisi iaculis eros sodales, vitae porttitor felis viverra. Nam rhoncus odio quis justo molestie, et convallis nibh feugiat. Donec dapibus auctor tortor, quis maximus justo blandit at. Nullam finibus arcu at felis scelerisque fermentum. Vivamus at venenatis dui. Integer sed pharetra ex. Vivamus vel dictum velit. Phasellus sodales dui augue, vitae interdum nulla malesuada sed. Proin tincidunt blandit elit, a efficitur enim laoreet et. In hac habitasse platea dictumst. Phasellus id lacus eget tellus placerat ornare ut eget leo. Fusce gravida tincidunt dui, in malesuada metus pharetra vel. Etiam nec ligula euismod, vestibulum ligula eu, sagittis nulla.

'},
  {
    user_id: 1,
    post_id: 3,
    content: 'Donec dapibus auctor tortor, quis maximus justo blandit at. Nullam finibus arcu at felis scelerisque fermentum. Vivamus at venenatis dui. Integer sed pharetra ex. Vivamus vel dictum velit. Phasellus sodales dui augue, vitae interdum nulla malesuada sed. Proin tincidunt blandit elit, a efficitur enim laoreet et. In hac habitasse platea dictumst. Phasellus id lacus eget tellus placerat ornare ut eget leo. Fusce gravida tincidunt dui, in malesuada metus pharetra vel. Etiam nec ligula euismod, vestibulum ligula eu, sagittis nulla.

'},
  {
    user_id: 2,
    post_id: 3,
    content: 'Donec dapibus auctor tortor, quis maximus justo blandit at. Nullam finibus arcu at felis scelerisque fermentum. Vivamus at venenatis dui. Integer sed pharetra ex. Vivamus vel dictum velit. Phasellus sodales dui augue, vitae interdum nulla malesuada sed. Proin tincidunt blandit elit, a efficitur enim laoreet et. In hac habitasse platea dictumst. Phasellus id lacus eget tellus placerat ornare ut eget leo. Fusce gravida tincidunt dui, in malesuada metus pharetra vel. Etiam nec ligula euismod, vestibulum ligula eu, sagittis nulla.

'
  },
  {
    user_id: 1,
    post_id: 4,
    content: 'Donec dapibus auctor tortor, quis maximus justo blandit at. Nullam finibus arcu at felis scelerisque fermentum. Vivamus at venenatis dui. Integer sed pharetra ex. Vivamus vel dictum velit. Phasellus sodales dui augue, vitae interdum nulla malesuada sed. Proin tincidunt blandit elit, a efficitur enim laoreet et. In hac habitasse platea dictumst. Phasellus id lacus eget tellus placerat ornare ut eget leo. Fusce gravida tincidunt dui, in malesuada metus pharetra vel. Etiam nec ligula euismod, vestibulum ligula eu, sagittis nulla.

'
  },
  {
    user_id: 2,
    post_id: 1,
    content: 'Donec dapibus auctor tortor, quis maximus justo blandit at. Nullam finibus arcu at felis scelerisque fermentum. Vivamus at venenatis dui. Integer sed pharetra ex. Vivamus vel dictum velit. Phasellus sodales dui augue, vitae interdum nulla malesuada sed. Proin tincidunt blandit elit, a efficitur enim laoreet et. In hac habitasse platea dictumst. Phasellus id lacus eget tellus placerat ornare ut eget leo. Fusce gravida tincidunt dui, in malesuada metus pharetra vel. Etiam nec ligula euismod, vestibulum ligula eu, sagittis nulla.

'
  }
]
#users.each do |user|
#  User.create!(user)
#end
#posts.each do |post|
#  Post.create!(post)
#end
comments.each do |comment|
  Comment.create!(comment)
end