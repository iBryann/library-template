import { HTMLAttributes } from 'react';
import { SIZE_ENUM, SizeOptions } from '../types';

import { AbsentUser } from './paths/AbsentUser';
import { AccessHistory } from './paths/AccessHistory';
import { ActivateCycle } from './paths/ActivateCycle';
import { Add } from './paths/Add';
import { AddAvaliation } from './paths/AddAvaliation';
import { AddBookmark } from './paths/AddBookmark';
import { AddCourse } from './paths/AddCourse';
import { AddUser } from './paths/AddUser';
import { AlignCenter } from './paths/AlignCenter';
import { AlignLeft } from './paths/AlignLeft';
import { AlignRight } from './paths/AlignRight';
import { Apps } from './paths/Apps';
import { Archive } from './paths/Archive';
import { ArrowDown } from './paths/ArrowDown';
import { ArrowLeft } from './paths/ArrowLeft';
import { ArrowLineLeft } from './paths/ArrowLineLeft';
import { ArrowLineRight } from './paths/ArrowLineRight';
import { ArrowRight } from './paths/ArrowRight';
import { ArrowUp } from './paths/ArrowUp';
import { Attach } from './paths/Attach';
import { Audio } from './paths/Audio';
import { BatchInvitations } from './paths/BatchInvitations';
import { BatchRegistration } from './paths/BatchRegistration';
import { Bold } from './paths/Bold';
import { Book } from './paths/Book';
import { Brackets } from './paths/Brackets';
import { Calendar } from './paths/Calendar';
import { Camera } from './paths/Camera';
import { Capelo } from './paths/Capelo';
import { CatLearning } from './paths/CatLearning';
import { Certificates } from './paths/Certificates';
import { Chapter } from './paths/Chapter';
import { ChangeProfile } from './paths/ChangeProfile';
import { Chat } from './paths/Chat';
import { CheckBoxOff } from './paths/CheckBoxOff';
import { CheckBoxOn } from './paths/CheckBoxOn';
import { CheckBoxUndefined } from './paths/CheckBoxUndefined';
import { ChevronDown } from './paths/ChevronDown';
import { ChevronLeft } from './paths/ChevronLeft';
import { ChevronRight } from './paths/ChevronRight';
import { ChevronUp } from './paths/ChevronUp';
import { ChevronTopDown } from './paths/ChevronTopDown';
import { ClassDiary } from './paths/ClassDiary';
import { ClassRoom } from './paths/ClassRoom';
import { Classes } from './paths/Classes';
import { Clock } from './paths/Clock';
import { Close } from './paths/Close';
import { Code } from './paths/Code';
import { CodeSet } from './paths/CodeSet';
import { CollapsePanel } from './paths/CollapsePanel';
import { CollapseScreen } from './paths/CollapseScreen';
import { Comments } from './paths/Comments';
import { Config } from './paths/Config';
import { Confirm } from './paths/Confirm';
import { Connection } from './paths/Connection';
import { Correction } from './paths/Correction';
import { Courses } from './paths/Courses';
import { Curriculum } from './paths/Curriculum';
import { Cut } from './paths/Cut';
import { Dashboard } from './paths/Dashboard';
import { Degree } from './paths/Degree';
import { Delete } from './paths/Delete';
import { DigitalTest } from './paths/DigitalTest';
import { Discipline } from './paths/Discipline';
import { Doc } from './paths/Doc';
import { Download } from './paths/Download';
import { Duplicate } from './paths/Duplicate';
import { Edit } from './paths/Edit';
import { EditCourse } from './paths/EditCourse';
import { EditProfile } from './paths/EditProfile';
import { EditUnavailable } from './paths/EditUnavailable';
import { Eraser } from './paths/Eraser';
import { Error } from './paths/Error';
import { Evaluate } from './paths/Evaluate';
import { EvaluationCycle } from './paths/EvaluationCycle';
import { ExpandScreen } from './paths/ExpandScreen';
import { Export } from './paths/Export';
import { ExternalEvaluations } from './paths/ExternalEvaluations';
import { ExternalLink } from './paths/ExternalLink';
import { ExtraMaterial } from './paths/ExtraMaterial';
import { FavoriteComments } from './paths/FavoriteComments';
import { File } from './paths/File';
import { Filter } from './paths/Filter';
import { FilterClear } from './paths/FilterClear';
import { Google } from './paths/Google';
import { Grades } from './paths/Grades';
import { Grid } from './paths/Grid';
import { Hamburguer } from './paths/Hamburger';
import { Help } from './paths/Help';
import { Hide } from './paths/Hide';
import { History } from './paths/History';
import { Home } from './paths/Home';
import { HorizontalDots } from './paths/HorizontalDots';
import { Html } from './paths/Html';
import { Image } from './paths/Image';
import { ImageFullScreen } from './paths/ImageFullScreen';
import { ImageToCenter } from './paths/ImageToCenter';
import { ImageToLeft } from './paths/ImageToLeft';
import { ImageToRight } from './paths/ImageToRight';
import { Import } from './paths/Import';
import { Info } from './paths/Info';
import { Invites } from './paths/Invites';
import { Italic } from './paths/Italic';
import { Journey } from './paths/Journey';
import { JustifyText } from './paths/JustifyText';
import { LearningObjects } from './paths/LearningObjects';
import { Licenses } from './paths/Licenses';
import { Like } from './paths/Like';
import { LinkUp } from './paths/LinkUp';
import { List } from './paths/List';
import { ListBullet } from './paths/ListBullet';
import { ListCheck } from './paths/ListCheck';
import { ListNumber } from './paths/ListNumber';
import { ListTraits } from './paths/ListTraits';
import { Loading } from './paths/Loading';
import { Location } from './paths/Location';
import { Lock } from './paths/Lock';
import { Materials } from './paths/Materials';
import { Medal } from './paths/Medal';
import { Message } from './paths/Message';
import { MicrophoneMute } from './paths/MicrophoneMute';
import { MicrophoneOpen } from './paths/MicrophoneOpen';
import { Midia } from './paths/Midia';
import { Minimize } from './paths/Minimize';
import { Mistake } from './paths/Mistake';
import { Mural } from './paths/Mural';
import { MyAvaliations } from './paths/MyAvaliations';
import { Next } from './paths/Next';
import { NoConnection } from './paths/NoConnection';
import { NotesHighlights } from './paths/NotesHighlights';
import { Notification } from './paths/Notification';
import { Olympics } from './paths/Olympics';
import { Order } from './paths/Order';
import { PMais } from './paths/PMais';
import { PPT } from './paths/PPT';
import { Pdf } from './paths/Pdf';
import { PendingRequests } from './paths/PendingRequests';
import { Play } from './paths/Play';
import { Premium } from './paths/Premium';
import { Print } from './paths/Print';
import { PrintedTest } from './paths/PrintedTest';
import { ProfileConfig } from './paths/ProfileConfig';
import { PublishGrade } from './paths/PublishGrade';
import { Questions } from './paths/Questions';
import { RadioOff } from './paths/RadioOff';
import { RadioOn } from './paths/RadioOn';
import { Redo } from './paths/Redo';
import { ReadingMode } from './paths/ReadingMode';
import { ReferenceMatrix } from './paths/ReferenceMatrix';
import { RegisterUser } from './paths/RegisterUser';
import { RelatedContent } from './paths/RelatedContent';
import { Release } from './paths/Release';
import { Reload } from './paths/Reload';
import { ReEnrollment } from './paths/ReEnrollment';
import { Reorganize } from './paths/Reorganize';
import { Reports } from './paths/Reports';
import { Required } from './paths/Required';
import { Reschedule } from './paths/Reschedule';
import { Resolutions } from './paths/Resolutions';
import { Responsible } from './paths/Responsible';
import { Results } from './paths/Results';
import { Rewrite } from './paths/Rewrite';
import { Rewind } from './paths/Rewind';
import { RightAnswer } from './paths/RightAnswer';
import { RotateLeft } from './paths/RotateLeft';
import { RotateRight } from './paths/RotateRight';
import { RoundCheckBoxOn } from './paths/RoundCheckBoxOn';
import { RoundCheckBoxOff } from './paths/RoundCheckBoxOff';
import { Save } from './paths/Save';
import { SavedBookmarks } from './paths/SavedBookmarks';
import { SatisfactionSurvey } from './paths/SatisfactionSurvey';
import { ScheduledActivities } from './paths/ScheduledActivities';
import { School } from './paths/School';
import { Search } from './paths/Search';
import { SeeAsStudent } from './paths/SeeAsStudent';
import { SeeUser } from './paths/SeeUser';
import { SelectColor } from './paths/SelectColor';
import { SelectWeeks } from './paths/SelectWeeks';
import { Send } from './paths/Send';
import { Share } from './paths/Share';
import { Show } from './paths/Show';
import { Simulations } from './paths/Simulations';
import { SingleInvite } from './paths/SingleInvite';
import { SingleView } from './paths/SingleView';
import { SmallGrid } from './paths/SmallGrid';
import { Source } from './paths/Source';
import { SpecialProjects } from './paths/SpecialProjects';
import { Student } from './paths/Student';
import { Subject } from './paths/Subject';
import { Syllabus } from './paths/Syllabus';
import { Tasks } from './paths/Tasks';
import { Teacher } from './paths/Teacher';
import { TeacherBook } from './paths/TeacherBook';
import { Templates } from './paths/Templates';
import { TemporaryLicenses } from './paths/TemporaryLicenses';
import { Text } from './paths/Text';
import { TextBox } from './paths/TextBox';
import { TextMarker } from './paths/TextMarker';
import { TextSize } from './paths/TextSize';
import { Timer } from './paths/Timer';
import { Tooltip } from './paths/Tooltip';
import { Trails } from './paths/Trails';
import { TransferUser } from './paths/TransferUser';
import { Trophy } from './paths/Trophy';
import { Tutorials } from './paths/Tutorials';
import { Underlined } from './paths/Underlined';
import { Undo } from './paths/Undo';
import { UndoLink } from './paths/UndoLink';
import { Upload } from './paths/Upload';
import { UsedLicenses } from './paths/UsedLicenses';
import { User } from './paths/User';
import { Validate } from './paths/Validate';
import { ValidateCourse } from './paths/ValidateCourse';
import { VerticalDots } from './paths/VerticalDots';
import { Video } from './paths/Video';
import { Warning } from './paths/Warning';
import { Windows } from './paths/Windows';
import { WrongAnswer } from './paths/WrongAnswer';
import { Xls } from './paths/Xls';
import { Zip } from './paths/Zip';
import { ZoomIn } from './paths/ZoomIn';
import { ZoomOut } from './paths/ZoomOut';

export interface IconProps extends HTMLAttributes<SVGElement> {
  color?: string;
  size?: SizeOptions;
  name: ICON_NAMES;
}

export interface PathProps {
  color?: string;
}

export const ICON_ZOOM = {
  [SIZE_ENUM.SMALL]: '80%',
  [SIZE_ENUM.MEDIUM]: '100%',
  [SIZE_ENUM.LARGE]: '120%',
};

export const ICONS = {
  AbsentUser,
  AccessHistory,
  ActivateCycle,
  Add,
  AddAvaliation,
  AddBookmark,
  AddCourse,
  AddUser,
  AlignCenter,
  AlignLeft,
  AlignRight,
  Apps,
  Archive,
  ArrowDown,
  ArrowLeft,
  ArrowLineLeft,
  ArrowLineRight,
  ArrowRight,
  ArrowUp,
  Attach,
  Audio,
  BatchInvitations,
  BatchRegistration,
  Brackets,
  Bold,
  Book,
  Calendar,
  Camera,
  Capelo,
  Certificates,
  ChangeProfile,
  CatLearning,
  Chapter,
  Chat,
  CheckBoxOff,
  CheckBoxOn,
  CheckBoxUndefined,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronTopDown,
  ClassDiary,
  Classes,
  ClassRoom,
  Clock,
  Close,
  Code,
  CodeSet,
  CollapsePanel,
  CollapseScreen,
  Comments,
  Connection,
  Config,
  Confirm,
  Correction,
  Courses,
  Curriculum,
  Cut,
  Dashboard,
  Degree,
  Delete,
  DigitalTest,
  Discipline,
  Doc,
  Download,
  Duplicate,
  Edit,
  EditCourse,
  EditProfile,
  EditUnavailable,
  Eraser,
  Error,
  Evaluate,
  EvaluationCycle,
  ExpandScreen,
  Export,
  ExternalEvaluations,
  ExternalLink,
  ExtraMaterial,
  FavoriteComments,
  File,
  Filter,
  FilterClear,
  Google,
  Grades,
  Grid,
  Hamburguer,
  Help,
  Hide,
  History,
  Home,
  HorizontalDots,
  Html,
  Image,
  ImageFullScreen,
  ImageToCenter,
  ImageToLeft,
  ImageToRight,
  Import,
  Info,
  Invites,
  Italic,
  Journey,
  JustifyText,
  LearningObjects,
  Licenses,
  Like,
  LinkUp,
  List,
  ListBullet,
  ListCheck,
  ListNumber,
  ListTraits,
  Loading,
  Location,
  Lock,
  Materials,
  Medal,
  Message,
  MicrophoneMute,
  MicrophoneOpen,
  Midia,
  Minimize,
  Mistake,
  Mural,
  MyAvaliations,
  Next,
  NoConnection,
  NotesHighlights,
  Notification,
  Olympics,
  Order,
  Pdf,
  PendingRequests,
  Play,
  PMais,
  PPT,
  Premium,
  Print,
  PrintedTest,
  ProfileConfig,
  PublishGrade,
  Questions,
  RadioOff,
  RadioOn,
  ReadingMode,
  Redo,
  ReEnrollment,
  ReferenceMatrix,
  RegisterUser,
  RelatedContent,
  Release,
  Reload,
  Reorganize,
  Reports,
  Required,
  Reschedule,
  Resolutions,
  Responsible,
  Results,
  Rewind,
  Rewrite,
  RightAnswer,
  RotateLeft,
  RotateRight,
  RoundCheckBoxOff,
  RoundCheckBoxOn,
  SatisfactionSurvey,
  Save,
  SavedBookmarks,
  Search,
  SeeAsStudent,
  SeeUser,
  SelectColor,
  SelectWeeks,
  School,
  Send,
  Share,
  ScheduledActivities,
  Show,
  Simulations,
  SingleInvite,
  SingleView,
  SmallGrid,
  Source,
  SpecialProjects,
  Student,
  Subject,
  Syllabus,
  Tasks,
  Teacher,
  TeacherBook,
  Templates,
  TemporaryLicenses,
  Text,
  TextBox,
  TextMarker,
  TextSize,
  Timer,
  Tooltip,
  Trails,
  TransferUser,
  Trophy,
  Tutorials,
  Underlined,
  Undo,
  UndoLink,
  Upload,
  UsedLicenses,
  User,
  Validate,
  ValidateCourse,
  VerticalDots,
  Video,
  Warning,
  Windows,
  WrongAnswer,
  Xls,
  Zip,
  ZoomIn,
  ZoomOut,
};

export type ICON_NAMES = keyof typeof ICONS;
