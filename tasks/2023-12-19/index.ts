// Tutaj skopiuj kod zadania
type PaginatedItems<T> = {
    currentPageItems: T[];
    totalPages: number;
    totalItems: number;
}

export function usePagination<T>(items: T[], itemsPerPage: number, pageNumber: number): PaginatedItems<T> {
    const offset = (pageNumber - 1) * itemsPerPage;
    const currentPageItems = items.slice(offset, itemsPerPage * pageNumber);
    // Round to greater integer value because in case of leftover the number of pages will be greater
    const totalPages = Math.ceil(items.length / itemsPerPage);
    return {
        currentPageItems,
        totalPages,
        totalItems: items.length
    }
}