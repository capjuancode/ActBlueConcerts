class ConcertsController < ApplicationController
  before_action :set_event, only: :show

  def index
    render inertia: 'Concerts/Index', props: { events: Event.all}
  end

  def show
    render inertia: 'Concerts/Show', props: { event: @event, ticket_types: @event.ticket_types }
  end

  private

  def set_event
    @event = Event.includes(:ticket_types).find(params['id'])
  end
end
