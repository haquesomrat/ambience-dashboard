"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { dummyProjects } from "@/lib/fake-data";
import { DataTablePagination } from "@/components/table-pagination";

export type Projects = {
  _id: string;
  title: string;
  url: string[];
  subject: string;
  skills: string[];
  description: string;
  images: string[];
  created_by: string;
};

export function ProjectListTable() {
  // Explicitly define the state type as an array of Companies
  const [project, setPorjects] = React.useState<Projects[]>(dummyProjects);

  // Fetch all companies on component mount
  // React.useEffect(() => {
  //   const getAllPosts = async () => {
  //     try {
  //       const res = await fetch(
  //         `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/companies/api`
  //       );
  //       if (res.ok) {
  //         const data: Projects[] = await res.json(); // Explicitly define the type of fetched data
  //         setPosts(data);
  //       } else {
  //         console.error("Failed to fetch companies");
  //       }
  //     } catch (error) {
  //       console.error("An error occurred while fetching companies:", error);
  //     }
  //   };
  //   getAllPosts();
  // }, []);

  // Handle company deletion
  const handleDeleteCompany = async (id: String) => {
    // delete the company data
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/companies/api/delete-company/${id}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        setPorjects((prevProject) =>
          prevProject.filter((project) => project._id !== id)
        );
        console.log("Upload successful:", await res.json());
      } else {
        console.error("Upload failed:", await res.json());
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const data: Projects[] = dummyProjects;

  const columns: ColumnDef<Projects>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "title",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            title
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("title")}</div>
      ),
    },
    {
      accessorKey: "url",
      header: "URL",
      cell: ({ row }) => (
        <div className="lowercase">
          {(row.getValue("url") as string[]).map(
            (link: string, index: number) => (
              <a className="line-clamp-1" href={link} key={index}>
                {link}
              </a>
            )
          )}
        </div>
      ),
    },
    {
      accessorKey: "subject",
      header: "Subject",
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("subject")}</div>
      ),
    },
    {
      accessorKey: "skills",
      header: "Skills",
      cell: ({ row }) => (
        <div className="lowercase line-clamp-2">
          {(row.getValue("skills") as string[]).map(
            (skill: string, index: number) => (
              <p key={index}>{skill},</p>
            )
          )}
        </div>
      ),
    },
    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }) => (
        <div className="lowercase line-clamp-2">
          {row.getValue("description")}
        </div>
      ),
    },
    {
      accessorKey: "images",
      header: "Images",
      cell: ({ row }) => (
        <div className="flex">
          {(row.getValue("images") as string[]).map(
            (Img: string, index: number) => (
              <Image
                height={16}
                width={60}
                key={index}
                src={Img}
                alt={`Image ${index}`}
              />
            )
          )}
        </div>
      ),
    },
    {
      accessorKey: "created_by",
      header: "Created By",
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("created_by")}</div>
      ),
    },
    {
      id: "actions",
      header: "Action",
      enableHiding: false,
      cell: ({ row }) => {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <Link
                href={`/dashboard/projects/${row?.original?._id}/update-project`}
              >
                <DropdownMenuItem className="cursor-pointer">
                  Edit
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem
                onClick={() => handleDeleteCompany(row?.original?._id)}
                className="cursor-pointer"
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full py-4">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter company names..."
          value={
            (table.getColumn("companyName")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("companyName")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <DataTablePagination table={table} />
        </div>
      </div>
    </div>
  );
}
