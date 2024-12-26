class CreateTicketTypes < ActiveRecord::Migration[7.1]
  def change
    create_table :ticket_types do |t|
      t.string :t_type
      t.string :name
      t.text :description
      t.integer :cost
      t.references :event, null: false, foreign_key: true

      t.timestamps
    end
  end
end
