class t_eq2_view {
	events;
		constructor()
		{
			document.getElementById("id_button").addEventListener("click", this.on_solve_clicked.bind(this));
		}
		
		set_events(events)
		{
			this.events=events;
		}
		
		on_solve_clicked()
		{
			//ar trebui sa apelam functia on_solve din controllers
			//dar nu putem directories
			//din lista de functii apelam functia on_solve
			this.events.call_event("on_solve_clicked_uab");
			
		}
			get_a()
			{
				document.getElementById("id_a").value;
			}
			
			get_b()
			{
				document.getElementById("id_b").value;
			}
			
			get_c()
			{
				document.getElementById("id_c").value;
			}
			
			set_solutions_para(solutions)
			{
				document.getElementById("id_x1").innerHTML = " X1 = " + solutions.x1_re + "+" + solutions.x1_im + "i";
				document.getElementById("id_x2").innerHTML = " X2 = " + solutions.x2_re + "+" + solutions.x2_im + "i";
			}
		
}		