class ConcertsController < ApplicationController
  before_action :set_event, only: :show

  def index
  end

  def show
    render inertia: 'BandForm', props: { event: @event, ticket_types: @event.ticket_types }
  end

  private

  def set_event
    @event = Event.includes(:ticket_types).find(params['id'])
  end
end
