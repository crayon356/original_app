class StatusesController < ApplicationController
  def index
    @status = Status.new
  end

  def create
    Status.create(status_params)
  end

  private
  def status_params
    params.require(:status).permit(:height, :weight, :BMI)
  end
end
