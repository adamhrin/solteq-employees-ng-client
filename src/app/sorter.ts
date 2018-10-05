import { MatSort } from "@angular/material";

export class Sorter {
    static sort(sort: MatSort, data) {
        if (!sort.active || sort.direction === '') {
            return data;
        }
        
        return data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'year': return this.compare(+a.year, +b.year, isAsc);
                case 'jan': return this.compare(+a.jan, +b.jan, isAsc);
                case 'feb': return this.compare(+a.feb, +b.feb, isAsc);
                case 'mar': return this.compare(+a.mar, +b.mar, isAsc);
                case 'apr': return this.compare(+a.apr, +b.apr, isAsc);
                case 'jun': return this.compare(+a.jun, +b.jun, isAsc);
                case 'jul': return this.compare(+a.jul, +b.jul, isAsc);
                case 'aug': return this.compare(+a.aug, +b.aug, isAsc);
                case 'sep': return this.compare(+a.sep, +b.sep, isAsc);
                case 'okt': return this.compare(+a.okt, +b.okt, isAsc);
                case 'nov': return this.compare(+a.nov, +b.nov, isAsc);
                case 'dec': return this.compare(+a.dec, +b.dec, isAsc);
                default: return 0;
            }
        });
    }

    /** Simple sort comparator for example ID/Name columns (for client-side sorting). */
    static compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
}