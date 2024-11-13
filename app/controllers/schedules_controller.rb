class SchedulesController < ApplicationController
  protect_from_forgery
  def index
    @schedules = Schedule.all
    @schedules_count = Schedule.count
  end

  def show
    @schedule = Schedule.find(params[:id])
  end

  def new
    @schedule = Schedule.new
  end

  def create
    @schedule = Schedule.new(schedule_params)
    if @schedule.save
      flash[:notice] = "スケジュールを作成しました"
      redirect_to schedules_path
    else
      flash[:alert] = "スケジュールの作成に失敗しました"
      render :new
    end
  end

  def edit
    @schedule = Schedule.find(params[:id])

  end

  def update
    @schedule = Schedule.find(params[:id])

    if @schedule.update(schedule_params)
      flash[:notice] = "スケジュールを更新しました。"
      redirect_to @schedule
    else
      flash[:alert] = "スケジュールの更新に失敗しました"
      render :edit
    end
  end


  def destroy
    @schedule = Schedule.find(params[:id])
    if @schedule.destroy
      redirect_to schedules_path, notice: '予定が削除されました。'
    else
      redirect_to schedules_path, alert: '削除に失敗しました。'
    end
  end



  private

  def schedule_params
    params.require(:schedule).permit(:title, :start_date, :end_date, :all_day, :memo)
  end
end
