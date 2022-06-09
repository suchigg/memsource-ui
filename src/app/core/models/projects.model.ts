export interface Projects {
  pageNumber: number;
	numberOfElements: number;
	totalElements: number;
	pageSize: number;
	totalPages: number;
	content: Project[];
}

export interface Project {
  targetLangs: string[];
	sourceLang: string;
	name: string;
	status: string;
}
