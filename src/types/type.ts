

export interface LoginType{
    email: string;
    password: string;
}


export interface DashboardType{
     total_employees: string, 
     new_hire_count: string, 
     upcoming_event: string, 
     open_positions: string;
}

export interface EmployeeType{
    name: string,
    email: string,
    job_title: string,
    department: string,
    employment_typ: string,
    status: string,
    location: string
}