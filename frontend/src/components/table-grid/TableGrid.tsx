import { useState, useEffect } from 'react';
import chunk from 'lodash/chunk';
import { User, Phone, BookUser, Mail, Shield, ChevronDown, ChevronUp, Copy, Trash, FilePenLine, NotebookPen } from 'lucide-react';

import Pagination from '../pagination/Pagination';

type csvDataType = paginatedDataType[];

type paginatedDataType = {
    id: string;
    company_name: string;
    contact: string;
    address: string;
    email: string;
    notes: string | undefined;
};

type pageDataType = {
    currentPage: number;
    totalPages: number;
};

const TableGrid: React.FC = () => {
    // TODO: Active row and data selection should be 1 state with multiple values vs multiple states
    const [csvData, setCsvData] = useState([] as csvDataType[]);
    const [selectedRow, setSelectedRow] = useState<paginatedDataType>();
    const [allowClipboard, setAllowClipboard] = useState<boolean>(false);
    const [copiedText, setCopiedText] = useState<string>('');
    const [modal, setModal] = useState<boolean>(false);
    const [paginatedData, setPaginatedData] = useState([] as paginatedDataType[]);
    const [page, setPage] = useState<pageDataType>({ currentPage: 0, totalPages: 0 } as pageDataType);
    const [sorting, setSorting] = useState({ name: '', sortedBy: 'asc' });

    useEffect(() => {
        // TODO: Permissions should be set once when app loads, create utility function for this
        navigator.permissions.query({ name: 'clipboard-write' as PermissionName })
            .then((result) => {
                if (result.state === "granted" || result.state === "prompt") {
                    setAllowClipboard(true);
                }
            })
            .catch((err) => { console.log(err); });

        const fetchCsvData = async () => {
            const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/${import.meta.env.VITE_SUPABASE_FOLDER}/mock_data.json`);
            if (!response.ok) return;

            const data = await response.json();
            if (!data) return;

            const chunkAmount = 8;
            const chunkedData = chunk(data.splice(0, 100), chunkAmount);
            setCsvData(chunkedData as csvDataType[]);
            setPage({ currentPage: 0, totalPages: chunkedData.length });
            setPaginatedData(chunkedData[0] as paginatedDataType[]);
        };

        fetchCsvData();
    }, []);

    useEffect(() => {
            if (csvData.length) {
            setPaginatedData(csvData[page.currentPage]);
        }
    }, [page, csvData]);

    const toggleSort = (e: React.MouseEvent) => {
        e.preventDefault();

        const filterColumn = (e.target as HTMLElement).dataset.element;
        if (!filterColumn) return;

        if (filterColumn !== sorting.name) {
            const sortedArray = [...paginatedData].sort((a, b) => {
                const key = filterColumn as keyof paginatedDataType;
                return (a[key] as string).localeCompare(b[key] as string);
            });
            setPaginatedData(sortedArray);
        } else {
            setPaginatedData([...paginatedData].reverse());
        }

        setSorting(({ name: filterColumn, sortedBy: sorting.sortedBy === 'asc' ? 'desc' : 'asc' }));       
    }

    const copyToClipboard = (e: React.MouseEvent, copyData: string) => {
        e.preventDefault();
        navigator.clipboard.writeText(copyData);
        setCopiedText(copyData);
    }

    // TODO: Add CRUD functionality for data
    const updateData = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setModal(false);
    }

    const editField = (e: React.MouseEvent) => {
        e.preventDefault();
        const id = (e.currentTarget as HTMLElement).dataset.id;

        setSelectedRow(paginatedData[id as unknown as number]);
        setModal(true);
    }

    const handleModal = (e: React.MouseEvent) => {
        e.preventDefault();
        setModal(!modal);
    }

    if (!paginatedData.length) return <div className="flex items-center justify-center">Loading...</div>;

    return (
        <div className="container mx-auto my-8">
            <table className="p-4 table-fixed">
                <thead className="p4">
                    <tr className="text-white border rounded-t-lg bg-slate-900">
                        <th className="px-8 py-4" onClick={e => toggleSort(e)} style={{ width: '20%' }}>
                            <div className="flex items-center gap-2" data-element="company_name">
                                <User color="white" size={18} />
                                Company Name
                                {sorting.name === 'company_name' &&
                                    <>
                                        {sorting.sortedBy === 'asc' ? <ChevronDown color="white" size={18} /> : <ChevronUp color="white" size={18} />}
                                    </>
                                }
                            </div>
                        </th>
                        <th className="px-8 py-4" onClick={e => toggleSort(e)} style={{ width: '15%' }}>
                            <div className="flex items-center gap-2" data-element="contact">
                                <Phone color="white" size={18} />
                                Contact
                                {sorting.name === 'contact' &&
                                    <>
                                        {sorting.sortedBy === 'asc' ? <ChevronDown color="white" size={18} /> : <ChevronUp color="white" size={18} />}
                                    </>
                                }
                            </div>
                        </th>
                        <th className="px-8 py-4" onClick={e => toggleSort(e)} style={{ width: '20%' }}>
                            <div className="flex items-center gap-2" data-element="address">
                                <BookUser color="white" size={18} />
                                Address
                                {sorting.name === 'address' &&
                                    <>
                                        {sorting.sortedBy === 'asc' ? <ChevronDown color="white" size={18} /> : <ChevronUp color="white" size={18} />}
                                    </>
                                }
                            </div>
                        </th>
                        <th className="px-8 py-4" onClick={e => toggleSort(e)} style={{ width: '15%' }}>
                            <div className="flex items-center gap-2" data-element="email">
                                <Mail color="white" size={18} />
                                Email
                                {sorting.name === 'email' &&
                                    <>
                                        {sorting.sortedBy === 'asc' ? <ChevronDown color="white" size={18} /> : <ChevronUp color="white" size={18} />}
                                    </>
                                }
                            </div>
                        </th>
                        <th className="px-8 py-4">
                            <div className="flex items-center justify-end gap-2" data-element="notes">
                                <Shield color="white" size={18} />
                                Actions
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody className="p-4">
                    {paginatedData.map((data: paginatedDataType, index) => (
                        <tr className="border-b border-l border-r even:bg-slate-200 odd:bg-slate-100" key={data.id}>
                            <td className="px-8 py-4 cursor-pointer group" onClick={e => copyToClipboard(e, data.company_name)}>
                                {allowClipboard ?
                                    <div className="flex items-center justify-between gap-2">
                                        {data.company_name}
                                        <div className="hidden group-hover:flex">
                                            {copiedText === data.company_name ?
                                                <Copy color="green" size={18} />
                                                :
                                                <Copy color="gray" size={18} />
                                            }
                                        </div>
                                    </div>
                                    :
                                    <div>
                                        {data.company_name}
                                    </div>
                                }
                            </td>
                            <td className="px-8 py-4">{data.contact}</td>
                            <td className="px-8 py-4 text-nowrap">
                                {data.address.length > 20 ? data.address.substring(0, 20) : data.address}
                            </td>
                            <td className="px-8 py-4">{data.email}</td>
                            <td className="px-8 py-4">
                                <div className="flex items-center justify-end gap-2">
                                    <div className="p-2 text-white bg-blue-400 rounded-md hover:bg-blue-500" data-id={index} onClick={e => handleModal(e)}>
                                        <NotebookPen color="white" size={18} />
                                    </div>
                                    <div className="p-2 text-white bg-orange-400 rounded-md hover:bg-orange-500" data-id={index} onClick={e => editField(e)}>
                                        <FilePenLine color="white" size={18} />
                                    </div>
                                    <div className="p-2 text-white bg-red-400 rounded-md hover:bg-red-500" data-id={index}>
                                        <Trash color="white" size={18} />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="py-4">
                <div className="flex items-center justify-center gap-4">
                    <Pagination
                        currentPage={page.currentPage}
                        totalPages={page.totalPages}
                        visiblePages={8}
                        updatePage={(currentPage: number) => setPage({ ...page, currentPage })}
                    />
                </div>
            </div>
            <div className="flex flex-col py-4">
                <small>
                    Wip - not all functionality or responsiveness has been implemented.
                </small>
                <small>
                    Added - Pagination (atm on each chunk*), Sorting, Clipboard, Modal.
                </small>
            </div>
            {modal &&
                <div className="absolute inset-0 z-50 flex items-center justify-center h-screen bg-black bg-opacity-50" style={{ display: modal ? 'flex' : 'none' }}>
                    <div className="flex flex-col items-center justify-center w-1/2 p-8 bg-white rounded-md shadow-md">
                        <h3>Add a note</h3>
                        <textarea
                            className="w-full h-48 p-2 my-4 border rounded-md"
                            defaultValue={selectedRow?.notes ? selectedRow.notes : ''}
                        />
                        <div className="flex flex-row items-center justify-between gap-4 my-4">
                            <button className="px-8 py-4 text-white bg-green-500 rounded-md" onClick={e => updateData(e)}>Confirm</button>
                            <button className="px-8 py-4 text-white bg-red-500 rounded-md" onClick={e => handleModal(e)}>Cancel</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default TableGrid;