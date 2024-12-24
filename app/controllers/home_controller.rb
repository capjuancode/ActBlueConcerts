class HomeController < ApplicationController
  def index
    render inertia: 'Hello', props: {
      name: "Juan"
    }
  end

  def show
  end
end
