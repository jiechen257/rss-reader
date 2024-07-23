import React from "react";
import { Search, Sun } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
	return (
		<nav className="border-b">
			<div className="bg-white shadow-sm p-4 flex justify-between items-center">
				<div className="flex items-center space-x-4">
					<Input
						type="text"
						placeholder="搜索"
						className="p-2 border rounded-md w-64 text-sm"
					/>
					<select className="p-2 border rounded-md text-sm">
						<option>全部文章</option>
					</select>
				</div>
				<div className="flex items-center space-x-4">
					<select className="p-2 border rounded-md text-sm">
						<option>全部标记为已读</option>
					</select>
					<span className="text-sm text-gray-600">2 未读</span>
					<select className="p-2 border rounded-md text-sm">
						<option>全部文章</option>
					</select>
					<Button className="p-2 bg-green-500 text-white rounded-md text-sm">
						订阅
					</Button>
					<img
						src="/path/to/avatar.jpg"
						alt="User Avatar"
						className="w-8 h-8 rounded-full"
					/>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
