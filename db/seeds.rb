Dir.glob('./db/band_json/*.json') do |rb_filename|
  p "working on: #{rb_filename}..."

  p "parsing reading and parse data in: #{rb_filename}..."
  file_content = File.read(rb_filename)
  data = JSON.parse(file_content)
  p "FINISH parsing reading and parse data: #{rb_filename}..."

  ticket_types = data.delete('ticketTypes')

  p "Initializing EVENT #{data['name']}"
  event = Event.new do |e|
    e.name = data['name']
    e.code_name = data['id']
    e.date = data['date']
    e.location = data['location']
    e.description_blurb = data['description_blurb']
    e.imgUrl = data['imgUrl']
  end
  p "FINISH Initializing EVENT #{data['name']}"

  puts

  p 'Adding tickets to event'
  ticket_types.each do |ticket|
    event.ticket_types.build do |t|
      t.t_type = ticket['type']
      t.name = ticket['name']
      t.description = ticket['description']
      t.cost = ticket['cost']
    end
  end
  p 'FINISH Adding tickets to event'

  puts

  p 'SAVING'
  event.save!
  p 'FINISH SAVING'

  p "FINISH working on: #{rb_filename}..."
  puts
end
