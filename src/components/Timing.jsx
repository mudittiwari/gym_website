import '../css/timing.css';
function Timing() {
    return (
        <>
            <section class="schedule section" id="schedule">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-12 col-12 text-center">
                            <h6 data-aos="fade-up">our weekly GYM schedules</h6>

                            <h2 class="text-white" data-aos="fade-up" data-aos-delay="200">Workout Timetable</h2>
                        </div>

                        <div class="col-lg-12 py-5 col-md-12 col-12 overflow-auto">
                            <table class="table table-bordered table-responsive schedule-table" data-aos="fade-up" data-aos-delay="300">

                                <thead class="thead-light">
                                    <th><i class="fa fa-calendar"></i></th>
                                    <th>Mon</th>
                                    <th>Tue</th>
                                    <th>Wed</th>
                                    <th>Thu</th>
                                    <th>Fri</th>
                                    <th>Sat</th>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td><small>7:00 am</small></td>
                                        <td>
                                            <strong>Cardio</strong>
                                            <span>7:00 am - 9:00 am</span>
                                        </td>
                                        <td>
                                            <strong>Power Fitness</strong>
                                            <span>7:00 am - 9:00 am</span>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <strong>Yoga Section</strong>
                                            <span>7:00 am - 9:00 am</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><small>9:00 am</small></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <strong>Boxing</strong>
                                            <span>8:00 am - 9:00 am</span>
                                        </td>
                                        <td>
                                            <strong>Areobic</strong>
                                            <span>8:00 am - 9:00 am</span>
                                        </td>
                                        <td></td>
                                        <td>
                                            <strong>Cardio</strong>
                                            <span>8:00 am - 9:00 am</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><small>11:00 am</small></td>
                                        <td></td>
                                        <td>
                                            <strong>Boxing</strong>
                                            <span>11:00 am - 2:00 pm</span>
                                        </td>
                                        <td>
                                            <strong>Areobic</strong>
                                            <span>11:30 am - 3:30 pm</span>
                                        </td>
                                        <td></td>
                                        <td>
                                            <strong>Body work</strong>
                                            <span>11:50 am - 5:20 pm</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><small>2:00 pm</small></td>
                                        <td>
                                            <strong>Boxing</strong>
                                            <span>2:00 pm - 4:00 pm</span>
                                        </td>
                                        <td>
                                            <strong>Power lifting</strong>
                                            <span>3:00 pm - 6:00 pm</span>
                                        </td>
                                        <td></td>
                                        <td>
                                            <strong>Cardio</strong>
                                            <span>6:00 pm - 9:00 pm</span>
                                        </td>
                                        <td></td>
                                        <td>
                                            <strong>Crossfit</strong>
                                            <span>5:00 pm - 7:00 pm</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
export default Timing;