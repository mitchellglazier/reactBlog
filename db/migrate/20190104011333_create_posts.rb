class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.belongs_to :blog, foreign_key: true
      t.string :Name
      t.text :Description
      t.text :Body
      t.string :Date

      t.timestamps
    end
  end
end
