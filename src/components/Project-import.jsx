import React, { useState, useRef, useEffect } from "react";
import ProjectMap from "./ProjectMap";
import { Link } from "react-router-dom";
import '../style/ProjectNavResponsive.css';

// Import hình ảnh
import bgImage from "../assets/img/sxd-ab6.png";
import sxdbg9 from "../assets/img/sxd-ab9.png";

// Import dữ liệu project từ JSON
import projectsData from '../data/projects.json';
import { getProjectImageByFileName } from '../utils/projectImageLoader';
import projectTeamData from '../data/project_team.json';
