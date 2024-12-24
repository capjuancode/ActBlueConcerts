class ConcertesController < ApplicationController
  def index
  end

  def show
    render inertia: 'BandForm', props: {
      name: "BTESS",
      id: "btess",
      date: 1686675030000,
      location: "6914 4th St NW, Washington, DC 20012",
      description_blurb: "<div><b>Come see the world sensation BTESS! ONE NIGHT ONLY!!!</b><p>You'll dance.</p><p>You'll sing.</p></p>You'll cry.</p><You'll feel all the feels.</p></div>",
      imgUrl: "https://via.placeholder.com/600/f66b97",
      ticketTypes: [
        {
          type: "general",
          name: "General Admission",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          cost: 6000
        },
        {
          type: "vip",
          name: "VIP",
          description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          cost: 15000
        },
        {
          type: "meet-and-greet",
          name: "VIP + Meet and Greet",
          description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          cost: 30000
        }
      ]
    }
  end
end
