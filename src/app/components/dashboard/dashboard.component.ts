import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, UserComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  teachersProfile: any;
  
	constructor(
		private studentsService: StudentsService
	) {
		this.studentsService.getTeachersProfile().subscribe(
			(res: any) => {
				this.teachersProfile = res;
			}
		);
	}

}
