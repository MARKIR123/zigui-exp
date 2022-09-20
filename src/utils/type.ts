type extData = { 
    type: string, 
    name: string, 
    lnglat?: [number, number], 
    id: number, 
    author?: string,
    img?: string,
    date?: string,
    desc?: string, 
    path?: Array<[number, number]>,
    del: () => void, 
    onActive: () => void, 
    onPassive: () => void, 
    onFocus: (zoom: number) => void, 
    onEdit?: () => void 
}

export type { extData }