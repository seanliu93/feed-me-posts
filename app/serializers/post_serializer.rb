class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :created_at
  has_many :comments
  has_one :user
  class CommentSerializer < ActiveModel::Serializer
    attributes :id, :content, :user
  end
  class UserSerializer < ActiveModel::Serializer
    attributes :id, :email
  end
end