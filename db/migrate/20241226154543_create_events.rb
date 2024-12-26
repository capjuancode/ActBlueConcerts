class CreateEvents < ActiveRecord::Migration[7.1]
  def change
    create_table :events do |t|
      t.string :name
      t.string :code_name
      t.string :date
      t.string :location
      t.text :description_blurb
      t.string :imgUrl

      t.timestamps
    end
  end
end
