class ConcertsController < ApplicationController
  def index
  end

  def show
    event = Event.includes(:ticket_types).first
    render inertia: 'BandForm', props: { event: event, ticket_types: event.ticket_types }
  end
end
