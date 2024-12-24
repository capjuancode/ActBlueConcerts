require "test_helper"

class ConcertesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get concertes_index_url
    assert_response :success
  end

  test "should get show" do
    get concertes_show_url
    assert_response :success
  end
end
